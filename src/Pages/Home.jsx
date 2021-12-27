import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Axios from "../Axios";

const Home = () => {
  let [state, setState] = useState([]);
  let [loading, setLoading] = useState(false);
  let [searchTrem, setsearchTrem] = useState("");
  useEffect(() => {
    let fetchData = async () => {
      let payload = await Axios.get("/posts");
      setState(payload.data);
    };
    fetchData();
  }, []);
  let mapData = state
    .filter(val => {
      if (searchTrem === "") {
        return val;
      } else if (val.title.toLowerCase().includes(searchTrem.toLowerCase())) {
        return val;
      }
    })
    .map(x => {
      return (
        <Fragment key={x.id}>
          <tr>
            <td>{x.id}</td>
            <td>{x.title}</td>
            <td>{x.author}</td>
            <td className="btn-group w-100">
              <div className="btn-group w-100">
                <Link
                  className="btn btn-outline-primary"
                  to={`/edit-post/${x.id}`}
                >
                  edit
                </Link>
                <Link
                  className="btn btn-outline-danger"
                  to={`/delete-post/${x.id}`}
                >
                  delete
                </Link>
              </div>
            </td>
          </tr>
        </Fragment>
      );
    });
  return (
    <div>
      {loading ? (
        "loading..."
      ) : (
        <Fragment>
          <div className="container my-4 btn-lite">
            <input
              type="search"
              name="searchTerm"
              className="form-control"
              placeholder="search"
              value={searchTrem}
              onChange={e => setsearchTrem(e.target.value)}
            />
          </div>
          <div className="container my-4 bg-light p-4">
            <table className="table table-bordered table-hover tabl-light">
              <thead className="table-dark">
                <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>author</th>
                </tr>
              </thead>
              <tbody>{mapData}</tbody>
            </table>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Home;
