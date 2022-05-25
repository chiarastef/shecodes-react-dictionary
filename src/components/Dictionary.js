import { useEffect, useState } from "react";
import axios from "axios";

import Results from "./Results";
import Photos from "./Photos.js";

import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);
  const [dictionaryNotFound, setdictionaryNotFound] = useState(false);

  let wordToSearch = "";

  // API call when word changes (when search form submitted)
  useEffect(() => {
    function search() {
      const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      axios
        .get(apiUrl)
        .then(handleDictionaryResponse)
        .catch(() => {
          setdictionaryNotFound(true);
        });

      const pexelsApiKey =
        "563492ad6f91700001000001ed1151ab972e436d86957521bdbae527";
      const pexelsUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=6`;
      const header = { Authorization: `Bearer ${pexelsApiKey}` };
      axios.get(pexelsUrl, { headers: header }).then(handlePexelsResponse);
    }

    search();
  }, [word]);

  // Search for synonym (after clicking on that synonym)
  function getSyn(syn) {
    setWord(syn);
    window.scrollTo(0, 0);
  }

  // Dictionary response
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    setdictionaryNotFound(false);
  }

  // Pexels (photos) response
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  // Form submitted
  function handleSubmit(event) {
    event.preventDefault();
    setLoaded(true);
    setWord(wordToSearch);
    event.target.reset();
  }

  // Get word from search field
  function handleChange(event) {
    wordToSearch = event.target.value;
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
            />
            <input
              type="submit"
              value="Search"
              className="btn search-btn col-12 col-sm-3 col-lg-2"
            />
          </form>
        </section>
        {/* Show results only if the word is in the dictionary, if not show error message */}
        {dictionaryNotFound ? (
          <section>Sorry, word not found.</section>
        ) : (
          <>
            <Results results={results} getSynonym={getSyn} />
            {/* Show photo section only if photo(s) exist(s) */}
            {photos.length > 0 ? (
              <section>
                <Photos photos={photos} />
              </section>
            ) : null}
          </>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit} className="row search-form">
            <input
              type="search"
              className="search-input col-12 col-sm-8 col-md-7 col-lg-5"
              onChange={handleChange}
            />
            <input
              type="submit"
              value="Search"
              className="btn search-btn col-12 col-sm-3 col-lg-2"
            />
          </form>
        </section>
      </div>
    );
  }
}
