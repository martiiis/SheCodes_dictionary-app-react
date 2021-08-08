/** @format */

import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResutls] = useState(null);

  function handleResponse(response) {
    setResutls(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          class="enter-word"
          placeholder="🔍"
          onChange={handleKeywordChange}
        />
      </form>
      <div className="hint">
        {" "}
        <strong>Suggested keywords:</strong> sunset, yoga, wine, sea...
      </div>
      <div className="container-results">
        <Results results={results} />
      </div>
    </div>
  );
}
