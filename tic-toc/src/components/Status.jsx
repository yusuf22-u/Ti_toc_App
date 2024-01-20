import React from "react";
import winnerPic from "../assets/image/winner.webp";
import PicO from "../assets/image/pico.webp";
import Drawpic from "../assets/image/draw1.avif";
export default function Status({ winnerInfo, square, xIsNext }) {
  let status;
  if (winnerInfo) {
    status = (
      <>
        <div className="winner">
          Winner: {winnerInfo.winner}
          {winnerInfo.winner === "X" ? <Winner /> : <WinnerO />}
        </div>
      </>
    );
  } else if (square.every((s) => s)) {
    status = (
      <>
        <div className="winner">
          <h1>draw</h1>
          {<Draw />}
        </div>
      </>
    );
  } else {
    status = (
      <>
        <div className="" style={{ margin: "auto", width: "100px" }}>
          Next Player: {xIsNext ? <Winner /> : <WinnerO />}
          <h1 style={{ marginLeft: "30px", color: xIsNext ? "green" : "pink" }}>
            {xIsNext ? "X" : "O"}
          </h1>
        </div>
      </>
    );
  }
  return <div>{status}</div>;
}
export function Winner() {
  return (
    <div className="win-pic">
      <img src={winnerPic} alt="pic" />
    </div>
  );
}
export function WinnerO() {
  return (
    <div className="win-pic">
      <img src={PicO} alt="pic" />
    </div>
  );
}
export function Draw() {
  return (
    <div className="win-pic">
      <img
        src={Drawpic}
        alt="pic"
        style={{ width: "100px", height: "110px" }}
      />
    </div>
  );
}
