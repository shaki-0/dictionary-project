import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audioElement = new Audio(props.phonetic.audio);

  function playSound(event) {
    audioElement.play();
  }

  return (
    <div className="Phonetic">
      <button className="buttonStyle" onClick={playSound}>
        <FontAwesomeIcon icon={faVolumeUp} />
      </button>
      | {props.phonetic.text} 
    </div>
  );
}
