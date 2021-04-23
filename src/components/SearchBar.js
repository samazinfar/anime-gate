import React, { useEffect, useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [animes, setAnimes] = useState([]);
  const [input, setInput] = useState();

  useEffect(() => {
    fetch("https://api.jikan.moe/v3/search/title?q=Fate/Zero&page=1") // inputValue
      .then((response) => response.json())
      .then((data) => {
        setAnimes(data.results);
      });
  }, [inputValue]);

  const handelKeyDown = (e) => {
    if (event.key === 'Enter') {
          
    }
  }

  return (
    <div className="body">
      <div className="search-box">
        <input
          value={inputValue}
          class="search-txt"
          type="text"
          name="rechercher"
          placeholder="Type to search..."
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown = {handelKeyDownv}
        />
        <button className="search-btn">search</button>
      </div>
      <div>
        {animes === undefined
          ? null
          : animes.map((anime) => <p>{anime.title}</p>)}
      </div>
    </div>
  );
}
