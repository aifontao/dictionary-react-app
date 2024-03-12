import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div>
                <div>
                  <strong>Definition: </strong>
                  {definition.definition}
                </div>
                <Examples examples={definition.example} />
                <Synonyms synonyms={definition.synonyms} />
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
