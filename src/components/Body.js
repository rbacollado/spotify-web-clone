import React from "react";
import "../components/body.css";
import Header from "../components/Header";
import { useStateValue } from "../StateProvider";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ discover_weekly }] = useStateValue();
  const playlistType = discover_weekly?.type;

  return (
    <div className="body">
      <Header />

      <div className="body__info">
        {/* <img src={discover_weekly?.images[0]?.url} alt="cover" /> */}
        <img
          src="https://newjams-images.scdn.co/v2/discover-weekly/j2OIQgTGzXWHMKruHd7dh8zHaKvElaof-HU6_J9ouKevuqLuNf2YRrAxMHAKd8FXkHvjHs6h2PERUXZs9jkg4dOyfXTepX2KG7i2PA8QHLsCsWn1tBz8izgMLLDwcjPQhBYMpTlcJrWMfSvu09CDsQ==/MDU6MDA6NTBUNjEtMzAtMA==/default"
          alt=""
        />

        <div className="body__infoText">
          {/* <strong>{playlistType?.toUpperCase()}</strong> */}
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description..</p>
          {/* <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p> */}
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* list of songs  */}
      </div>
    </div>
  );
}

export default Body;
