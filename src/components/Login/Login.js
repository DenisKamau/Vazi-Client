import React, { useEffect, useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "./Login.css";
import axios from "../../axios";
import { setInStorage } from "../utils/storage";
import swal from "sweetalert";

const Login = () => {
  const [{ loggedIn }, dispatch] = useStateValue();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  // const [ShowPassword, setShowPassword] = useState(false);
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: "HIDE_MENU",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    if (!Email || !Password) {
      swal("All fields required!", {
        buttons: false,
        icon: "error",
        timer: 1700,
      });
    } else {
      const variables = {
        password: Password,
        email: Email,
      };

      const ac = new AbortController();

      axios
        .post("/account/signin", variables, { signal: ac.signal })
        .then((resp) => {
          if (resp.data.success) {
            swal({
              title: "Logged In",
              button: false,
              icon: "success",
              timer: 1700,
            });
            setInStorage("the_main_app", { token: resp.data.token });
            setInStorage("user", { user: resp.data.user });
            dispatch({
              type: "UPDATE_USER",
              item: resp.data.user,
            });
            dispatch({
              type: "UPDATE_TOKEN",
              item: resp.data.token,
            });
            setEmail("");
            setPassword("");
            history.push("/");
            ac.abort();
          } else {
            swal("Incorrect Email/Password", {
              timer: 3000,
            });
            ac.abort();
          }
        })
        .catch((err) => console.error(err));
    }
  };

  if (loggedIn) {
    return <Redirect to={"/"} />;
  }

  return (
    <div className="login">
      <div className="login__details">
        <h3>Welcome back!</h3>
        <p>Sign in to your account here:</p>
        <form onSubmit={submitForm} className="login__form">
          <div className="login__email">
            <label htmlFor="CustomerEmail">Email</label>
            <input
              type="email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="CustomerEmail"
            />
          </div>
          <div className="login__password">
            <label htmlFor="CustomerPassword">Password</label>
            <input
              type="password"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="CustomerPassword"
            />
          </div>
        </form>
        <Link to="/" className="login__link">
          <p>Forgot your password?</p>
        </Link>
        <button onClick={submitForm} className="login__button">
          Sign In
        </button>
        <Link to="/register" className="login__link">
          <p>Create Account</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
