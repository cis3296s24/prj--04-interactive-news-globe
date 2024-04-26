/*
 * Purpose: Represents a sidebar component displaying news articles based on the selected country and category.
 * Data Fields:
 *   - articles: An array containing news articles fetched from the NewsAPI based on the selected country and category.
 *   - selectedCategory: A string representing the selected category of news articles (e.g., 'business', 'entertainment').
 * Methods:
 *   - useEffect: React hook that fetches news articles from the NewsAPI when the selected country or category changes.
 *   - handleCategoryChange: Function to update the selected category when a category button is clicked.
 * Return Value: A React component displaying news articles for the selected country and category.
 */

import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import "./sidebar.css";

function Sidebar({ selectedCountry }) {
  const [articles, setArticles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('politics'); // Default category
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      // Check if selectedCountry is valid
      if (!selectedCountry || !selectedCountry.code) {
        setError('No country selected or country code missing.');
        setArticles([]);
        return;
      }

      const url = `http://localhost:5000/api/news?country=${selectedCountry.code}&category=${selectedCategory}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to fetch news');
        }
        const data = await response.json();
        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
          setError(null); // Clear any previous errors
        } else {
          setError('No articles found');
          setArticles([]);
        }
      } catch (error) {
        setError(error.message);
        setArticles([]);
      }
    };

    fetchNews();
  }, [selectedCountry, selectedCategory]); // React to changes in selectedCountry or selectedCategory

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="sidebar-container">
      <h1>News for {selectedCountry && selectedCountry.name ? selectedCountry.name.toUpperCase() : 'Select a Country'}</h1>
      <div className="category-buttons">
        {['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology', 'politics'].map(category => (
          <button key={category} onClick={() => handleCategoryChange(category)}>{category}</button>
        ))}
      </div>
      {error && <p className="error">{error}</p>}
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
        <p>No news available.</p>
      )}
    </div>
  );
}

export default Sidebar;