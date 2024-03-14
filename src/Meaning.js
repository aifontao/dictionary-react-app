import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div>
                <div>{definition.definition}</div>
                <div>
                  <em>{definition.example}</em>
                </div>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
