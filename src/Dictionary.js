/** @format */

import React, { useState } from "react";
import axios from "axios";
import Results from "./Results.js";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResutls] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResutls(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    //api Pexels - 563492ad6f91700001000001d9b9c613c4ea47ef9a6a6ac35aa94de1

    let pexelsApiKey =
      "563492ad6f91700001000001d9b9c613c4ea47ef9a6a6ac35aa94de1";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <div className="container-photos">
        <Photos photos={photos} />
      </div>
      <div className="container-results">
        <Results results={results} />
      </div>
    </div>
  );
}
