import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreatePost from "./Components/CreatePost";
import EditPost from "./Components/EditPost";
import useFetch from "./HOOK/useFetch";
import Home from "./Pages/Home";
import Navbar from "./Pages/Navbar";
import DeletePost from './Components/DeletePost';

const App = () => {
  return (
    <Router>
      <section>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/edit-post/:id" element={<EditPost />} />
            <Route path="/delete-post/:id" element={<DeletePost />} />
          </Routes>
        </main>
        <footer></footer>
      </section>
    </Router>
  );
};

export default App;
