import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function Login({ props }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  function onSubmit(e) {
    e.preventDefault();
    // props.login(username, password);
    for (let user of props.users) {
      // If we found the user
      if (user.username === username && user.password === password) {
        //  /user/:uid
        history.push(`/user/${user._id}`);
        return;
      }
    }
    // if we can't find user
    alert("Invalid Credential Please Try Again.");
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={e => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Link className="btn btn-primary btn-block" to="/user/:uid">
          Login
        </Link>
        <Link className="btn btn-success btn-block" to="/register">
          Register
        </Link>
      </form>
    </div>
  );
}
