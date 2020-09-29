import React from "react";
import "../components/footer.css";

/*icon imports */
import { Grid, Slider } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import DevicesIcon from "@material-ui/icons/Devices";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__album"
          src="https://upload.wikimedia.org/wikipedia/en/2/2e/Usher-yeah.jpg"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Anywhere With You</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__icon" />

        <SkipPreviousIcon className="footer__icon" />

        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />

        <SkipNextIcon className="footer__icon" />

        <RepeatIcon className="footer__icon" />
      </div>

      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <DevicesIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
