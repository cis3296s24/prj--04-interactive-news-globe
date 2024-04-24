import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import "./sidebar.css";
import { newsapi } from "./news.js";

function Sidebar({ selectedCountry }) {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('politics'); // Default category

  useEffect(() => {
    if (selectedCountry) {
      console.log(`Fetching news for ${selectedCountry.name}`);
      newsapi.v2.topHeadlines({
        country: selectedCountry.code,
        category: selectedCategory,
        language: 'en',
        pageSize: 5,
      }).then(response => {
        if (response.articles && response.articles.length > 0) {
          setArticles(response.articles);
        } else {
          console.log('No articles found');
          setArticles([]);
        }
      }).catch(error => {
        console.error("Error finding news:", error);
        setArticles([]);
      });
    }
  }, [selectedCountry, selectedCategory]); // Include selectedCategory in the dependencies array

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="sidebar-container">
      {/* Make sure to check if selectedCountry is defined and has a name property */}
      <h1>News for {selectedCountry && selectedCountry.name ? selectedCountry.name.toUpperCase() : 'Select a Country'}</h1>
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange('business')}>Business</button>
        <button onClick={() => handleCategoryChange('entertainment')}>Entertainment</button>
        <button onClick={() => handleCategoryChange('general')}>General</button>
        <button onClick={() => handleCategoryChange('health')}>Health</button>
        <button onClick={() => handleCategoryChange('science')}>Science</button>
        <button onClick={() => handleCategoryChange('sports')}>Sports</button>
        <button onClick={() => handleCategoryChange('technology')}>Technology</button>
      </div>
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
