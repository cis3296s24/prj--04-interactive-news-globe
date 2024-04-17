import { Cartesian3, Color } from "cesium";
import { Viewer, Entity } from "resium";
import CountriesLog from "./CountriesLog.js";
import viewSettings from "./viewSettings.js"
import { newsapi } from "./news.js"

const countryInfo = new CountriesLog();

export default function App() {
  const countries = countryInfo.getAllCountries();
  newsapi.v2.topHeadlines({
    q: 'trump',
    category: 'politics',
    language: 'en',
    country: 'us'
  }).then(response => {
    console.log(response);
  });

  return (
    <Viewer full {... viewSettings}>
      {countries.map((country, index) => (
        <Entity
          //Add points for minor/major cities in United States, and major cities abroad
          key={index}
          name={country.name}
          position={Cartesian3.fromDegrees(country.position[0], country.position[1])}
          point={{ pixelSize: 10, color: Color.WHITESMOKE }}
          description={
            `<div>
              <h3>${country.name}</h3>
              <img src="${country.flag}" alt="${country.name} Flag" style="width: 100px; height: auto;" />
            </div>`
          }
        />
      ))}
    </Viewer>
  );
}
