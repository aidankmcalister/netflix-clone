import React from "react";
import Login from "../components/Login";
import netflixBackground from "../assets/imgs/netflixBackground.jpeg";

const LoginPage = () => {
  return (
    <div className="h-screen w-screen">
      <div
        className=" h-full bg-cover flex justify-center items-center"
        // style={{ backgroundImage: `url(${netflixBackground})` }}
      >
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
