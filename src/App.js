import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";

import { useStateValue } from "./StateProvider";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const urltoken = hash.access_token;

    if (urltoken) {
      dispatch({
        type: "SET_TOKEN",
        token: urltoken,
      });

      spotifyApi.setAccessToken(urltoken);

      spotifyApi.getMe().then((user) => {
        console.log("user: ", user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    console.log("hash:", hash);
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotifyApi} /> : <Login />}
    </div>
  );
}

export default App;
