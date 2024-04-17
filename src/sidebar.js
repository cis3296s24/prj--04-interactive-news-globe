import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import "./sidebar.css";
import { newsapi } from "./news.js";


function Sidebar({ selectedCountry }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    newsapi.v2.topHeadlines({
      country: selectedCountry,
      category: 'politics',
      language: 'en',
    }).then(response => {
      setArticles(response.articles);
    });
  }, [selectedCountry]);

  return (
    <div className="sidebar-container">
      <h1>News for {selectedCountry.toUpperCase()}</h1>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <Card key={index} className="news-article">
            <Card.Img variant="top" src={article.urlToImage || './images/placeholder.jpg'} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.description}</Card.Text>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No news available.</p>  // Display a message if no articles are found
      )}
    </div>
  );
}

export default Sidebar;