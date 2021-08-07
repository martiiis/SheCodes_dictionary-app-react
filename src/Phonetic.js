/** @format */

import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">{""}</a>
      <div className="phoneticText">/{props.phonetic.text}/</div>
      <br />
      <div className="player">
        {" "}
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </div>
      <hr />
    </div>
  );
}
