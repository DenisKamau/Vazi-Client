/* eslint-disable no-unreachable */
export const initialstate = {
  user: {
    fullname: "",
    username: "",
  },
  categories: [],
  cart: [],
  token: "",
  show: false,
  loggedIn: false,
};

export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "SET_SHOW":
      return {
        ...state,
        show: !state.show,
      };
      break;

    case "HIDE_MENU":
      return {
        ...state,
        show: false,
      };
      break;

    case "SET_CATEGORIES":
      return {
        ...state,
        categories: [...state.categories, action.item],
      };
      break;

    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      break;

    case "REMOVE_FROM_CART":
      let newCart = [...state.cart];

      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

      index >= 0 ? newCart.splice(index, 1) : console.warn(`Cant remove product (id: ${action.id}) as its not in cart`);

      return {
        ...state,
        cart: newCart,
      };
      break;

    case "LOGOUT_REQUEST":
      return {
        ...state,
        user: {
          fullname: "",
          username: "",
        },
        token: "",
        cart: [],
        loggedIn: false,
      };
      break;

    case "UPDATE_TOKEN":
      return {
        ...state,
        token: action.item,
        loggedIn: true,
      };
      break;

    case "UPDATE_USER":
      const { fullname, username } = action.item;
      return {
        ...state,
        user: {
          fullname: fullname,
          username: username,
        },
        loggedIn: true,
      };
      break;

    default:
      return state;
  }
};

export default reducer;
