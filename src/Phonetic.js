import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faVolumeUp} from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  const audioElement = new Audio(props.phonetic.audio);

  function playSound(event) {
    audioElement.play();
  }

  return (
    <div className="Phonetic">
      <button onClick={playSound}>
         <FontAwesomeIcon icon={faVolumeUp} />
      </button>
    <br />
    {props.phonetic.text} 
</div>
  );
}
