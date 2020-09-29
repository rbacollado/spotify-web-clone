import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";

import { useStateValue } from "./StateProvider";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

function App() {
  const [{ user, token, playlists }, dispatch] = useStateValue();

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

    spotifyApi.getUserPlaylists().then((playlists) => {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    spotifyApi.getPlaylist("37i9dQZEVXcLXGfDlEKwbx").then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  }, []);

  // console.log(playlists);

  return (
    <div className="app">
      {token ? <Player spotify={spotifyApi} /> : <Login />}
    </div>
  );
}

export default App;
