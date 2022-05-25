import FadeLoader from "react-spinners/FadeLoader";
import { nanoid } from "nanoid";

import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import Synonyms from "./Synonyms";

import "./Results.css";

export default function Results(props) {
  if (props.results && props.results.word !== "null") {
    return (
      <div className="Results">
        <section className="word-section">
          <h3 className="word">{props.results.word}</h3>
          {props.results.phonetics.map((phonetic) => {
            return (
              <div key={nanoid()}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        <section>
          {props.results.meanings.map((meaning) => {
            return (
              <div key={nanoid()}>
                <Meaning meaning={meaning} />
                <Synonyms
                  synonyms={meaning.synonyms}
                  getSynonym={props.getSynonym}
                />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <FadeLoader color="#212529" loading={true} size={150} />
      </div>
    );
  }
}
