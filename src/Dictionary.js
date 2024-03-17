import React, { useState } from "react";
import Results from "./Results";
import Gallery from "./Gallery";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleGalleryResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let galleryApiKey = "aof4801f27bc8e543a47a5fc535tf9b8";
    let galleryApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${galleryApiKey}`;
    axios.get(galleryApiUrl).then(handleGalleryResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  if (photos) {
    return (
      <div className="Dictionary">
        <section>
          <h3 className="mb-2">What do you want to look up?</h3>
          <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="hint">
            suggested search: poetry, book, exercise, travel...
          </div>
        </section>
        <Results results={results} />
        <Gallery photos={photos} />
      </div>
    );
  } else {
    return (
      <div className="Dictionary">
        <section>
          <h3 className="mb-2">What do you want to look up?</h3>
          <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />
          </form>
          <div className="hint">
            suggested search: poetry, book, exercise, travel...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  }
}
