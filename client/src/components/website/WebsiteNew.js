import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import uuid from "uuid";
import axios from "axios";

export default function WebsiteNew(props) {
  const params = useParams();
  const history = useHistory();

  const [websites, setWebsites] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getWebsites();
    // eslint-disable-next-line
  }, []);

  const getWebsites = async () => {
    const res = await axios.get(`/api/website/user/${params.uid}`);
    setWebsites(res.date);
  };

  const submit = async e => {
    e.preventDefault();
    const newWeb = {
      _id: uuid.v4(),
      name: name,
      description: description,
      developerId: params.uid
    };
    await axios.post("/api/website", newWeb);
    history.push(`/user/${params.uid}/website`);
  };
  // export default function websiteNew() {

  return (
    <div>
      <nav className="navbar navbar-dark bg-primary fixed-top row">
        {/*left Navbar*/}
        <aside className="col-lg-3 d-none d-lg-block">
          <div className="navbar">
            <div>
              <Link className="text-light" to="/user/:uid/Website">
                <i className="fas fa-chevron-left" />
              </Link>
              <span className="navbar-brand mb-0 h1 ml-4">Websites</span>
            </div>
            <Link className="text-light" to="/user/:uid/Website/new">
              <i className="fas fa-plus" />
            </Link>
          </div>
        </aside>
        {/*right navbar*/}
        <section className="col-lg-9 navbar">
          <div>
            <Link
              className="text-light d-lg-none"
              to={`/user/${params.uid}/Website`}
            >
              <i className="fas fa-chevron-left" />
            </Link>
            <span className="navbar-brand mb-0 h1 ml-4">New Websites</span>
          </div>
          <Link className="text-light" to="/user/:uid/website">
            <button className="text-light btn" form="WebsiteForm">
              <i className="fas fa-check" />
            </button>
          </Link>
        </section>
      </nav>
      <main className="row mt-5">
        <aside className="col-lg-3 d-none d-lg-block">
          {/**/}
          <div className="container">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Link to="/user/:uid/Website/:wid/page">Address Book App</Link>
                <Link className="float-right" to="/user/:uid/Website/:wid">
                  <i className="fas fa-cog" />
                </Link>
              </li>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <Link to="/user/:uid/Website/:wid/page">Blogger</Link>
                  <Link className="float-right" to="/user/:uid/Website/:wid">
                    <i className="fas fa-cog" />
                  </Link>
                </li>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <Link to="/user/:uid/Website/:wid/page">Blogger App</Link>
                    <Link className="float-right" to="/user/:uid/Website/:wid">
                      <i className="fas fa-cog" />
                    </Link>
                  </li>

                  <ul className="list-group list-group-flush">
                    {websites.map(website => (
                      <li key={website._id} className="list-group-item">
                        <Link
                          to={`/website.developerId/Website/${website._id}/page`}
                        >
                          {website.name}
                        </Link>
                        <Link
                          className="float-right"
                          to={`/user/${website.developerId}/Website/${website._id}`}
                        >
                          <i className="fas fa-cog" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </ul>
              </ul>
            </ul>
          </div>
        </aside>
        <div className="col-lg-9">
          <div className="container">
            <form onsubmit={submit} id="websiteForm">
              <div className="form-group">
                <label htmlFor="name"> Name </label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Website Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description"> description</label>
                <textarea
                  type="text-area"
                  className="form-control"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  placeholder="Enter Website description..."
                  rows={5}
                  defaultValue={""}
                />
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer className="navbar navbar-dark bg-primary fixed-bottom">
        <span />
        <Link className="text-light" to={`/user/${params.uid}`}>
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
