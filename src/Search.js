import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./Search.css";
import axios from "axios";

export default function Search(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [definitions, setDefinitions] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function dictionaryResponse(response) {
    setDefinitions(response.data[0]);
  }

  function pexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(dictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001f543822ba8164b94a516810527848241";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=3`;
    axios.get(pexelsApiUrl, { headers: { Authorization: `Bearer ${pexelsApiKey}`},}).then(pexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Search">
        <div className="secondSection">
          <form onSubmit={handleSubmit}>
            <input
              className="typeWord"
              type="search"
              placeholder="Type a word"
              onChange={handleWordChange}
            />
          </form>
        </div>
        <Results results={definitions} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
