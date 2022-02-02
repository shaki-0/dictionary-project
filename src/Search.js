import React, { useState } from "react";
import Results from "./Results";
import "./Search.css"
import axios from "axios";

export default function Search() {
  const [word, setWord] = useState("");
  const [definitions,setDefinitions] = useState (null);


  function getResponse (response) {
    setDefinitions(response.data[0]);
  }

  function search(event) {
    event.preventDefault();


    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(getResponse);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

 return (
   <div className="Search">
     <div className="smallerSection">
       <form onSubmit={search}>
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
}
