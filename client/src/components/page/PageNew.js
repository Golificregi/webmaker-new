import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import uuid from uuid;
import Axios from "axios";

export default function PageNew(props) {
  const history = useHistory();
  const params = useParams();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const submit = async e => {
    e.preventDefault();
    const newPage = {
      _id: uuid.v4()
      name: name,
      title: title,
      websiteId: params.wid
     };

     await Axios.post("/api/page", newPage); 
     history.push(`/user/${params.uid}/website/${params.wid}/page`);
    };
  }

  return (
    <div>
      <nav className="navbar bg-light navbar-light fixed-top">
        <div>
          <Link className="text-dark" to="/user/:uid/website/:wid/page">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 h1 ml-4">Page New</span>
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
              placeholder="Page Title..."
            />
          </div>
        </form>
      </div>
      <nav className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to="../user/:uid" className="text-dark">
          <i className="fas fa-user" />
        </Link>
      </nav>
    </div>
  );
}
