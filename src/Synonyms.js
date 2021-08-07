/** @format */

import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <li>{synonym} </li>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
