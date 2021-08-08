/** @format */

import React from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Results.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        {""}
      </a>
      <div className="phoneticText">/{props.phonetic.text}/</div>
      <br />{" "}
      <ReactAudioPlayer
        src={props.phonetic.audio}
        controls
        className="player"
      />
    </div>
  );
}
