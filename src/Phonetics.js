import React, { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import "./Phonetics.css";

export default function Phonetics(props) {
  const [currentIcon, setCurrentIcon] = useState(<FaVolumeMute />);
  console.log(props);

  function handleClick() {
    let sound = props.phonetic.audio;
    let audio = new Audio(sound);

    if (audio.paused) {
      audio.play();
      setCurrentIcon(<FaVolumeUp />);
      audio.onended = function () {
        setCurrentIcon(<FaVolumeMute />);
      };
    } else {
      audio.pause();
      audio.currentTime = 0;
      setCurrentIcon(<FaVolumeMute />);
    }
  }

  return (
    <span className="Phonetics">
      <button onClick={handleClick}>{currentIcon}</button>
      <span>{props.phonetic.text}</span>
    </span>
  );
}
