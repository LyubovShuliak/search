import React, { useEffect } from "react";
import "./Header.scss";
import citySearch from "../../assets/images/city-search.svg";
import search from "../../assets/images/search.svg";
import { useAppDispatch } from "../../app/hooks";
import { fetchResumes } from "../../redux/work_search/shopSlice";

const Header = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // fetch("http://135.181.30.244:27007/api/summaries/?page=1")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))

    dispatch(fetchResumes("3")).then((response) => console.log(response));
  });
  return (
    <div className="head">
      <header className="title_block">
        <h2 className="subtitle">сайт по поиску работы №1</h2>
        <h1 className=" title "> Please enter the vacancy and the city</h1>
      </header>
      <div className="search">
        <div className="search_candidate">
          <img src={search} className="search_candidate__icon" />
          <input
            type="text"
            placeholder="На какую должность вы ищете кандидата?"
            className="search_candidate__input"
          />
        </div>
        <div className="search_city">
          <img src={citySearch} className="search_city__icon" />
          <input
            type="text"
            placeholder="Город"
            className="search_city__input"
          />
        </div>
        <button className="search_button">Найти кандидатов</button>
      </div>
    </div>
  );
};

export default Header;
