import { Cartesian3, Color } from "cesium";
import { Viewer, Entity } from "resium";
import CountriesLog from "./CountriesLog.js";
import viewSettings from "./viewSettings.js"
import { newsapi } from "./news.js"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from "react";

const countryInfo = new CountriesLog();

export default function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    newsapi.v2.topHeadlines({
      category: 'politics',
      language: 'en',
      country: 'us'
    }).then(response => {
      console.log(response);
      setArticles(response.articles);
    });
  }, []); // Empty dependency array to run the effect only once

  const countries = countryInfo.getAllCountries();

  return (
    <Viewer full {...viewSettings}>
      {countries.map((country, index) => (
        <Entity
          //Add points for minor/major cities in United States, and major cities abroad
          key={index}
          name={country.name}
          position={Cartesian3.fromDegrees(country.position[0], country.position[1])}
          point={{ pixelSize: 10, color: Color.BLACK }}
          description={country.name}
        />
      ))}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="./images/imageexample.jpg" />
        <Card.Body>
          {articles.length > 0 ? (
            <>
              <Card.Title>{articles[0].title}</Card.Title>
              <Card.Text>{articles[0].description}</Card.Text>
              <Button variant="primary" src={articles[0].url}>Go somewhere</Button>
            </>
          ) : (
            <Card.Title>Loading...</Card.Title>
          )}
        </Card.Body>
      </Card>
    </Viewer>
  );
}
