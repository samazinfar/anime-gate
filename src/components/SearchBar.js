import React, { useEffect, useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [apiResponse, setApiResponse] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/search/anime?q=${input}`) // inputValue
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data.results);
      });
  }, [input]);
  console.log(apiResponse);
  const handelKeyDown = (e) => {
    if (e.key === "Enter") {
      setInput(inputValue);
      setInputValue("");
    }
  };

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
          onKeyDown={handelKeyDown}
        />
        <button className="search-btn">search</button>
      </div>
      <div>
        {apiResponse === undefined
          ? null
          : apiResponse.map((anime) => (
              <div>
                <img src={anime.image_url} />
                <p>{anime.title}</p>
              </div>
            ))}
      </div>
    </div>
  );
}
