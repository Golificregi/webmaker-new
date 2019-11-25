import React from "react";
import { Link } from "react-router-dom";

export default function PageEdit() {
  return (
    <div>
      <nav className="navbar bg-light navbar-light fixed-top">
        <div>
          <Link className="text-dark" to="/user/:uid/website/:wid/page">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 h1 ml-4">Page Edit</span>
        </div>
        <i className="fas fa-plus text-light" />
        <Link to="/user/:uid/website/:wid/page" className="text-dark">
          <i className="fas fa-check" />
        </Link>
      </nav>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="NamePost"> Name </label>
            <input
              type="text"
              className="form-control"
              id="Blogname"
              placeholder="Blog Post"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName"> Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter Page Title..."
            />
          </div>
          <Link
            className="btn btn-danger btn-block"
            to="/user/:uid/website/:wid/page"
          >
            Delete
          </Link>
        </form>
      </div>
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to="/user/:uid" className="text-dark">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
