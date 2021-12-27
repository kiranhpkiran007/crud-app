import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../Axios";

const CreatePost = () => {
  let navigate = useNavigate();
  let [state, setState] = useState({
    title: "",
    author: "",
    loading: false,
  });
  let { title, author, loading } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let payload = { title, author };
      await Axios.post("/posts", payload);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section id="postBlock" className="col-md-4 mx-auto bg-white p-4 mt-4">
      <article>
        <h2 className="h4 font-weight-bold text-success text-uppercase border-bottom">
          CreatePost
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="title"
              name="title"
              onChange={handleChange}
              value={title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Author
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Author"
              onChange={handleChange}
              name="author"
              value={author}
            />
          </div>

          <button type="submit" className="btn btn-success">
            {loading ? "loding" : "Submit"}
          </button>
        </form>
      </article>
    </section>
  );
};

export default CreatePost;
