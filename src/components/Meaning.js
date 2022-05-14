import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <div>{definition.definition}</div>
            <div className="example">{definition.example}</div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
