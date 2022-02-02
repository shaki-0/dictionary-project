import React, { useState } from "react";
import Results from "./Results";
import "./Search.css";
import axios from "axios";

export default function Search() {
  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function getResponse(response) {
    setDefinitions(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getResponse);
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
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
