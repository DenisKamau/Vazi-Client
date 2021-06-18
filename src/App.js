/* eslint-disable no-empty-pattern */
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Contact from "./components/Contact/Contact";
import Error from "./components/Error/Error";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import Product from "./components/Product/Product";
import Shop from "./components/Shop/Shop";
import ScrollToTop from "./ScrollToTop";
import Createaccount from "./components/Createaccount/Createaccount";
import { useStateValue } from "./StateProvider";
import { getFromStorage } from "./components/utils/storage";
import { doneAnimation, loadingAnimation } from "./components/utils/animations";
import FadeIn from "react-fade-in";

function App() {
  const [{}, dispatch] = useStateValue();
  const [IsLoading, setIsLoading] = useState(true);
  const [Done, setDone] = useState(false);
  const obj = getFromStorage("the_main_app");
  const userDetails = getFromStorage("user");

  useEffect(() => {
    dispatch({
      type: "HIDE_MENU",
    });
    if (obj === null) {
      setIsLoading(false);
      setDone(true);
    } else {
      dispatch({
        type: "UPDATE_TOKEN",
        item: obj.token,
      });
      dispatch({
        type: "UPDATE_USER",
        item: {
          fullname: userDetails.user.fullname,
          username: userDetails.user.username,
        },
      });
      setIsLoading(false);
      setDone(true);
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">
      <Router>
        {!Done ? (
          <FadeIn>
            <div className="animation1">
              <h1>Loading</h1>
              {IsLoading ? loadingAnimation() : doneAnimation()}
            </div>
          </FadeIn>
        ) : (
          <>
            <Header />
            <div className="App">
              <ScrollToTop>
                <Switch>
                  <Route exact path="/">
                    <Homepage />
                  </Route>
                  <Route exact path="/checkout">
                    <Checkout />
                  </Route>
                  <Route exact path="/contact">
                    <Contact />
                  </Route>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                  <Route exact path="/:slug">
                    <Shop />
                  </Route>
                  <Route exact path="/product/:productId">
                    <Product />
                  </Route>
                  <Route exact path="/register">
                    <Createaccount />
                  </Route>
                  <Route exact path="*">
                    <Error />
                  </Route>
                </Switch>
              </ScrollToTop>
            </div>
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
