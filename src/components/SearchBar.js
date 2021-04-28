import React, { useEffect, useState } from "react";
import "./SearchBar.css";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [apiResponse, setApiResponse] = useState([]);
  const [callApi, setCallApi] = useState("");

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/search/anime?q=${callApi}`)
      .then((response) => response.json())
      .then((data) => {
        setApiResponse(data.results);
      });
  }, [callApi]);
  const handelKeyDown = (e) => {
    if (e.key === "Enter") {
      setCallApi(inputValue);
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
