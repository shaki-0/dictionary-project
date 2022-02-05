import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeUp} from "@fortawesome/free-solid-svg-icons";
import "./Phonetic.css";

export default function Phonetic(props) {
  const audio = new Audio(props.phonetic.audio);

  function playSound(event) {
    event.preventDefault();
    audio.play();
  }

  return (
    <div className="Phonetic">
      <button onClick={playSound} className="buttonStyle">
        <FontAwesomeIcon icon={faVolumeUp} />
      </button>
      | {props.phonetic.text}
    </div>
  );
}
