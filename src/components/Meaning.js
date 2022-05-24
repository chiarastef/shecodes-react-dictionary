import { nanoid } from "nanoid";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="part-of-speech">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition) => {
        return (
          <div key={nanoid()}>
            <div className="definition">{definition.definition}</div>
            <div className="example">{definition.example}</div>
          </div>
        );
      })}
    </div>
  );
}
