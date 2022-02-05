import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css"; 

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="mb-4 mt-4">
              {definition.definition}
              <br />
              <em className="example">Example: {definition.example} </em>
            </div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
