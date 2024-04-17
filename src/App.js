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
  const [selectedCountry, setSelectedCountry] = useState('us');


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
          onClick={() => setSelectedCountry(country.name)} // Update selectedCountry
        />
      ))}
      <Sidebar articles={articles} selectedCountry={selectedCountry} />
    </Viewer>
  );
} 