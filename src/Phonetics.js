import React from "react";

export default function Phonetics(props) {
  function play() {
    let sound = props.phonetic.audio;
    new Audio(sound).play();
    console.log(Audio);
  }

  return (
    <span className="Phonetics">
      <button onClick={play}>
        <i class="fa-solid fa-volume-high"></i>
      </button>
      <span>{props.phonetic.text}</span>
    </span>
  );
}
