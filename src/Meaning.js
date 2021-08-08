/** @format */

import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="type-word">{props.meaning.partOfSpeech} </h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <div className="definition">
                <strong>📑 Definition: </strong>
                {definition.definition}
              </div>
              <br />
              <div className="example">
                <strong>📎 Example: </strong>
                <em>" {definition.example}"</em>
              </div>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </div>
        );
      })}
    </div>
  );
}
