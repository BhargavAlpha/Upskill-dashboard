import React from "react";
import goldcup from "../Assests/goldcup.png";
import silvercup from "../Assests/silvercup.png";
import bronzecup from "../Assests/bronzecup.png";
import expcoin from "../Assests/expcoin.svg";
const LeaderBoard = ({ e, index, mine }) => {
  return (
    <div className={`mc-rank-list-chip ${mine ? "myleaderboard" : ""}`}>
      <div className="mc-rank-list-name-cont">
        {index > 2 && `${index + 1}`}
        {index === 0 && <img src={goldcup} alt="goldcup"></img>}
        {index === 1 && <img src={silvercup} alt="goldcup"></img>}
        {index === 2 && <img src={bronzecup} alt="goldcup"></img>}
        <span>{e.name}</span>
      </div>
      <div className="mc-rank-list-points-cont">
        <img src={expcoin} alt="expcoin" />
        <div>{e?.userDetails?.points}XP</div>
      </div>
    </div>
  );
};

export default LeaderBoard;
