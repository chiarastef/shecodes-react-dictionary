import { useState } from "react";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";

import Results from "./Results";
import Photos from "./Photos.js";

import "./Dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.default);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001ed1151ab972e436d86957521bdbae527";
    const pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
    const header = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsUrl, { headers: header }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div>
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit} className="row search-form">
            <input
              type="search"
              className="search-input col-12 col-sm-8 col-md-7 col-lg-5"
              onChange={handleChange}
              defaultValue={props.default}
            />
            <input
              type="submit"
              value="Search"
              className="btn search-btn col-12 col-sm-3 col-lg-2"
            />
          </form>
        </section>
        <Results results={results} />
        <section>
          <Photos photos={photos} />
        </section>
      </div>
    );
  } else {
    load();
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleChange}
            defaultValue={props.default}
          />
        </form>
        <div className="spinner">
          <FadeLoader color="#212529" loading={true} size={150} />
        </div>
      </div>
    );
  }
}
