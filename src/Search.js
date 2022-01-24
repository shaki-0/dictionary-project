import React, {useState} from "react";

export default function Search() {
const [word,setWord] = useState ("");

    function result(event) {
        event.preventDefault();
        alert (`Searching for ${word}`); 
    }

    function handleWordChange (event) {
        setWord(event.target.value);
    }


  return (
    <div className="Search">
      <form onSubmit={result}>
          <input type="search" placeholder="Enter a word" onChange={handleWordChange} />
      </form>
    </div>
  );
}
