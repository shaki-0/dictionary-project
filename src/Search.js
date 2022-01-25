import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [word, setWord] = useState("");


  function getResponse (response) {
    console.log(response.data[0]);
  }

  function result(event) {
    event.preventDefault();


    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

 return (
    <div className="Search">
      <form onSubmit={result}>
        <input
          type="search"
          placeholder="Enter a word"
          onChange={handleWordChange}
        />
      </form>
    </div>
  );
}
