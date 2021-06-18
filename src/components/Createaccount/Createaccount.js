import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import axios from "../../axios";
import "./Createaccount.css";
import swal from "sweetalert";
import { useStateValue } from "../../StateProvider";

const Createaccount = () => {
  const [{ loggedIn }] = useStateValue();

  const [FullName, setFullName] = useState("");
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Contact, setContact] = useState("");
  // const [ShowPassword, setShowPassword] = useState(false);
  const history = useHistory();

  // ==========================
  //   Send Data to Backend
  // ==========================

  const submitForm = (e) => {
    e.preventDefault();

    if (!FullName || !Username || !Email || !Password || !Contact) {
      swal("All fields required!", {
        buttons: false,
        icon: "error",
        timer: 2000,
      });
    } else {
      const variables = {
        fullname: FullName,
        username: Username,
        email: Email,
        password: Password,
        contact: Contact,
      };

      const ac = new AbortController();

      axios
        .post("/account/signup", variables, { signal: ac.signal })
        .then((resp) => {
          if (resp.data.success) {
            swal("User Successfully Created", {
              buttons: false,
              timer: 2000,
            });
            setFullName("");
            setUsername("");
            setEmail("");
            setPassword("");
            history.push("/login");
            ac.abort();
          } else if (resp.data.exists) {
            swal("User already exists", {
              buttons: false,
              timer: 2000,
            });
          } else {
            swal("Failed to create user", {
              buttons: false,
              timer: 2000,
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
    <div className="createaccount">
      <div className="createaccount__details">
        <h3>Create an Account </h3>
        <p>Its a snap!</p>
        <form onSubmit={submitForm} className="createaccount__form">
          <div className="createaccount__name">
            <input
              placeholder="FullName"
              type="text"
              value={FullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              id="FirstName"
            />
          </div>
          <div className="createaccount__name">
            <input
              placeholder="UserName"
              type="text"
              value={Username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              id="LastName"
            />
          </div>
          <div className="createaccount__email">
            <input
              placeholder="Email"
              type="email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="CustomerEmail"
            />
          </div>
          <div className="createaccount__password">
            <input
              placeholder="Password"
              type="password"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="CustomerPassword"
            />
          </div>
          <div className="createaccount__password">
            <input
              placeholder="Contact"
              type="text"
              value={Contact}
              onChange={(e) => {
                setContact(e.target.value);
              }}
              id="Contact"
            />
          </div>
          <button onClick={submitForm} className="createaccount__button">
            Create
          </button>
        </form>
        <div className="createaccount__options">
          <Link className="link__option" to="/shop">
            <h3>Return to store</h3>
          </Link>
          <span>•</span>
          <Link className="link__option" to="/login">
            <h3>Login</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Createaccount;
