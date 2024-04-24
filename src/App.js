/*
 * Purpose: Represents the main application component responsible 
 *     for rendering the interactive globe and sidebar.
 * Data Fields:
 *    - articles: Holds the array of articles fetched from the news API.
 *    - selectedCountry: Stores the currently selected country object.
 * Return Value: The JSX representing the main application UI.
 */

import React, { useState, useEffect } from "react";
import { Viewer, Entity } from "resium";
import { Cartesian3, Color } from "cesium";
import Sidebar from './sidebar.js';
import CountriesLog from "./CountriesLog.js";
import viewSettings from "./viewSettings.js";
import './App.css';


const countryInfo = new CountriesLog();

export default function App() {
  const [articles, setArticles] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(countryInfo.getAllCountries()[0]);


  const countries = countryInfo.getAllCountries();

  return (
    <Viewer className="viewer-container" {...viewSettings}>
      {countries.map((country, index) => (
        <Entity
          key={index}
          name={country.name}
          position={Cartesian3.fromDegrees(country.position[0], country.position[1])}
          point={{ pixelSize: 10, color: Color.BLACK }}
          description={country.name}
          onClick={() => setSelectedCountry(country)} // Update selectedCountry
        />
      ))}
      <Sidebar articles={articles} selectedCountry={selectedCountry} />
    </Viewer>
  );
} 