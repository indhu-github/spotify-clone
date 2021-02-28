import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />

      {/* Display songs and banner */}
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div class="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Top English Songs</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div class="body_songs">
        <div class="body_icons">
          <PlayCircleFilledIcon className="body_shuffle" />
          <FavoriteIcon font-size="large" />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
      </div>
    </div>
  );
}

export default Body;
