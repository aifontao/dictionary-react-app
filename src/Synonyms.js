import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length !== 0) {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return (
            <ul key={index}>
              <li>{synonym}</li>
            </ul>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
