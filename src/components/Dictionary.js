import { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search}>
        <input type="search" onChange={handleChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
