export default function Phonetic(props) {
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
