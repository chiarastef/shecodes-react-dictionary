import FadeLoader from "react-spinners/FadeLoader";

import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Results.css";

import Synonyms from "./Synonyms";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="word-section">
          <h3 className="word">{props.results.word}</h3>
          {props.results.phonetics.map((phonetic, index) => {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        <section>
          {props.results.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
                <Synonyms synonyms={meaning.synonyms} />
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
