import "./Phonetic.css";

export default function Phonetic(props) {
  // Check whether the api has audio file
  if (props.phonetic.audio === "") {
    return null;
  } else {
    return (
      <div className="Phonetic">
        <audio controls src={props.phonetic.audio}>
          Listen
        </audio>
        <br />
        {props.phonetic.text}
      </div>
    );
  }
}
