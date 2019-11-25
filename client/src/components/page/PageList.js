import React from "react";
import { Link } from "react-router-dom";

export default function PageList() {
  return (
    <div>
      <nav className="navbar bg-light navbar-light fixed-top">
        <div>
          <Link className="text-dark" to="/user/:uid/website">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 h1 ml-4">Page List</span>
        </div>
        <i className="fas fa-plus text-light" />
        <Link to="/user/:uid/website/:wid/page/new" className="text-dark">
          <i className="fas fa-plus" />
        </Link>
      </nav>
      <main className="container">
        <form>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Link to="/user/:uid/website/:wid/page/:pid/widget">
                {" "}
                Blog Post
              </Link>
              <Link
                to="/user/:uid/website/:wid/page/:pid"
                className="float-right"
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/user/:uid/website/:wid/page/:pid/widget"> Blog </Link>
              <Link
                to="/user/:uid/website/:wid/page/:pid"
                className="float-right"
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/user/:uid/website/:wid/page/:pid/widget"> Home</Link>
              <Link
                to="/user/:uid/website/:wid/page/:pid"
                className="float-right"
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/user/:uid/website/:wid/page/:pid/widget"> About</Link>
              <Link
                to="/user/:uid/website/:wid/page/:pid"
                className="float-right"
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
            <li className="list-group-item">
              <Link to="/user/:uid/website/:wid/page/:pid/widget">
                {" "}
                Contact Us
              </Link>
              <Link
                to="/user/:uid/website/:wid/page/:pid"
                className="float-right"
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
          </ul>
        </form>
      </main>
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to="../User/:uid" className="text-dark">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
