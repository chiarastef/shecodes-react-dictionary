export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            {definition.definition} <br /> <em>{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
