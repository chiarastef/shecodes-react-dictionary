import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="Synonym">
        <h6>Synonyms:</h6>
        {props.synonyms.map((synonym, index) => {
          return (
            <>
              {" "}
              {props.synonyms.length - 1 === index ? (
                <span key={index}>{synonym}</span>
              ) : (
                <span key={index}>{synonym},</span>
              )}
            </>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
