import React from "react";
import "./Body.css";
import { useDataLayerValue } from "./DataLayer";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:3hV8VFgYqyd6Wtb8hlQFmI`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
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
          <PlayCircleFilledIcon
            onClick={playPlaylist}
            className="body_shuffle"
          />
          <FavoriteIcon font-size="large" />
          <MoreHorizIcon />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
