/** @format */

import { Route, Routes } from "react-router-dom";
import "./App.css";

import Posts from "./Component/Posts";
import Login from "./Component/Login";
import NotFound from "./Component/NotFound";
import SignUp from "./Component/SignUp.jsx";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import CreatePost from "./Component/CreatePost";

import { useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  const logoutHandler = () => {
    setAuthenticated(false);
    localStorage.removeItem("my-app-token");
  };
  return (
    <>
      <Header
        authenticated={authenticated}
        userName={userName}
        setAuthenticate={setAuthenticated}
        logoutHandler={logoutHandler}
      />
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              setAuthenticated={setAuthenticated}
              setUserName={setUserName}
            />
          }
        />
        <Route path="/posts" element={<Posts />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
