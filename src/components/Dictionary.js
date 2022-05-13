import { useState } from "react";
import axios from "axios";

import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
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
