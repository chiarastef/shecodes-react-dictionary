import { nanoid } from "nanoid";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonym">
        <strong>Synonyms:</strong>
        <br />
        {props.synonyms.map((synonym, index) => {
          return (
            <span key={nanoid()}>
              {" "}
              {props.synonyms.length - 1 === index ? (
                <span
                  className="single-synonym"
                  onClick={() => props.getSynonym(synonym)}
                >
                  {synonym}
                </span>
              ) : (
                <span
                  className="single-synonym"
                  onClick={() => props.getSynonym(synonym)}
                >
                  {synonym},
                </span>
              )}
            </span>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
