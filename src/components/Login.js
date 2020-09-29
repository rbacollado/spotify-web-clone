import React from "react";
import "../components/login.css";
import { loginUrl } from "../spotify";

function Login() {
  return (
    <div className="login">
      <img src="/media/Spotify_Logo_RGB_White.png" alt="HEY" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
