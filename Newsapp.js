import React, { useState, useEffect } from 'react';
import Card from './Card';


const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  const API_KEY = "48ffcfa4ab0d474ba08a2472e45c048e";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
      const jsonData = await response.json();
      console.log(jsonData.articles);
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const userInput = (event) =>{
    setSearch(event.target.value)

  }

  return (
    <div className="news-app">
      <nav className="navbar">
        <div className="logo">
          <h1>HOTCHITS</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">All News</a>
          </li>
          <li>
            <a href="#">Trending News</a>
          </li>
        </ul>
        
        <div className="searchBar">
          <input type="text" placeholder="Search news" value={search} onChange={handleInput} />
          <button onClick={getData}>Search</button>
        </div>
      </nav>
      
      <div>
        <p className="head">Stay Tuned For The Hot and Crunchy News</p>
      </div>

      <div className="news-buttons">
        <button onClick={userInput} value="Sports" >Sports</button>
        <button onClick={userInput} value="Political" >Political</button>
        <button onClick={userInput} value="Health" >Health</button>
        <button onClick={userInput} value="Entertainment" >Entertainment</button>
        <button onClick={userInput} value="Technology" >Technology</button>
      </div>

      <div className="card-container">
        {newsData ? <Card data={newsData} /> : <p>Loading news...</p>}
      </div>
    </div>
  );
};

export default Newsapp;








