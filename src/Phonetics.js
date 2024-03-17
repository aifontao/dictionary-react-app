import React, { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import "./Phonetics.css";

export default function Phonetics(props) {
  const [currentIcon, setCurrentIcon] = useState(<FaVolumeMute />);
  function handleClick() {
    let audio = new Audio(props.phonetic.audio);

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

  if (props.phonetic.audio) {
    return (
      <span className="Phonetics">
        <button onClick={handleClick}>{currentIcon}</button>
        <span>{props.phonetic.text}</span>
      </span>
    );
  } else {
    return <span className="Phonetics">{props.phonetic.text}</span>;
  }
}
