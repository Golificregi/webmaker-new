import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import uuid from "uuid";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const history = useHistory();

  const register = e => {
    e.preventDefault();
    // verify password match
    if (password !== password2) {
      alert("The password you entered does not match, please try again");
      return;
    }
    // Check if username is taken
    for (let user of props.users) {
      if (user.username === username) {
        alert("username is taken, please try another one");
        return;
      }
    }
    // Add new user into users array
    const newUser = {
      _id: uuid.v4(),
      username: username,
      password: password,
      firstName: "",
      lastName: "",
      email: ""
    };
    props.addUser(newUser);
    // Navigate user into his profile
    history.push(`/user/${newUser._id}`);
  };

  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a className="navbar-brand" href="!#">
          Home
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="!#">
                How it works <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="!#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="!#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Referrals
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
      <div className="container">
        <h4 className="text-info">Register</h4>
        <form on onSubmit={register}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value0)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="Verify-password"
              className="form-control"
              placeholder="Verify Password"
              value={password2}
              onChange={e => setPassword2(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-block" to="/user/:uid">
            Register
          </button>
          <Link className="btn btn-danger btn-block" to="/login">
            Cancel
          </Link>
        </form>
      </div>
      <img src="projectLogo.png" alt="Logo" />
    </div>
  );
}
