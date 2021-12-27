import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Axios from "../Axios";

const DeletePost = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [state, setState] = useState({
    title: "",
    author: "",
    loading: false,
  });
  let { title, author, loading } = state;
  useEffect(() => {
    let fetchData = async () => {
      let deleteData = await Axios.get(`/posts/${id}`);
      setState(deleteData.data);
    };
    fetchData();
  }, [id]);
  let handleClick = async () => {
    await Axios.delete(`/posts/${id}`);
    navigate("/");
  };
  return (
    <div>
      <aside>
        <h2>
          {title}+ <span>{author}</span>
        </h2>
      </aside>
      <button className="btn btn-danger" onClick={handleClick}>
        Remove
      </button>
    </div>
  );
};

export default DeletePost;
