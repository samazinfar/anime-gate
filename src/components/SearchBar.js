import React, { useEffect, useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch("https://api.jikan.moe/v3/search/tittle?q=Fate/Zero&page=1") // inputValue
      .then((response) => response.json())
      .then((data) => {
        setAnimes(data.results);
      });
  }, [inputValue]);

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
        />
        <button className="search-btn">search</button>
      </div>
      <div>
        {animes.map((anime) => (
          <p>{anime.title}</p>
        ))}
      </div>
    </div>
  );
}
