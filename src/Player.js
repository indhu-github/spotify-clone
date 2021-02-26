import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        {/* sidebar */}
        {/* body */}
      </div>
      {/* footer */}
    </div>
  );
}

export default Player;
