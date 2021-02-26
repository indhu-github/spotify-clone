import React from "react";
import Body from "./Body";
import "./Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body />
        {/* sidebar */}
        {/* body */}
      </div>
      {/* footer */}
    </div>
  );
}

export default Player;
