// /* eslint-disable */ Disable eslint if needed
import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";

// Components
import Home from "./Home";
import MyList from "./MyList";
import News from "./News";
import Discover from "./Discover";

// Icons
import "./Navbar.css";
import { ReactComponent as Logo } from "./images/Logo.svg";
import { ReactComponent as ListIcon } from "./images/list.svg";
import { ReactComponent as NewsIcon } from "./images/flame-svgrepo-com.svg";
import { ReactComponent as DiscoverIcon } from "./images/shuriken-svgrepo-com-3.svg";
import { ReactComponent as AboutIcon } from "./images/person-fill.svg";
import { ReactComponent as SearchIcon } from "./images/search-svgrepo-com-2.svg";

export default function Navbar() {
  const [inputValue, setInputValue] = useState("");
  const [callApi, setCallApi] = useState("");
  const [apiResponse, setApiResponse] = useState([]);

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
    <section className="main">
      <section className="navBar">
        <Link to="/" className="logo noUnderline">
          <div>
            <Logo />
          </div>
          <p className="logoName">
            ANIME <br />
            GATE
          </p>
        </Link>
        <div className="navigation">
          <Link to="/my-list" className="navigationElement noUnderline">
            <ListIcon />
            <p className="navigationText">My List</p>
            <hr className="separator" />
          </Link>
          <Link to="/news" className="navigationElement noUnderline">
            <NewsIcon />
            <p className="navigationText">News</p>
            <hr className="separator" />
          </Link>
          <Link to="/discover" className="navigationElement noUnderline">
            <DiscoverIcon />
            <p className="navigationText">Discover</p>
            <hr className="separator" />
          </Link>
          <Link to="/about" className="navigationElement noUnderline">
            <AboutIcon />
            <p className="navigationText">About</p>
          </Link>
        </div>
        <div className="positionSearchBar">
          <div className="searchBar">
            <input
              className="input"
              placeholder="Search an anime"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handelKeyDown}
            />
            <button className="searchButton">
              <SearchIcon />
            </button>
          </div>
        </div>
      </section>
      <section className="wrapperInputResponsive">
        <input
          className="responsiveInput"
          placeholder="Search an anime"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handelKeyDown}
        />
        <button className="responsiveInputButton">Go</button>
      </section>
      {apiResponse === undefined
        ? null
        : apiResponse.map((anime) => (
            <div>
              <img src={anime.image_url} />
              <p>{anime.title}</p>
            </div>
          ))}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/my-list" component={MyList} />
        <Route exact path="/news" component={News} />
        <Route exact path="/discover" component={Discover} />
      </Switch>
    </section>
  );
}
