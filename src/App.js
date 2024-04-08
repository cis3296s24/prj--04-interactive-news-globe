import { Cartesian3, Color } from "cesium";
import { Viewer, Entity } from "resium";
import CountriesLog from "./CountriesLog.js";

const countryInfo = new CountriesLog();

export default function App() {
  const countries = countryInfo.getAllCountries();

  return (
    <Viewer full>
      {countries.map((country, index) => (
      <Entity
        //Add points for minor/major cities in United States, and major cities abroad
        key={index}
        name= {country.name}
        position={Cartesian3.fromDegrees(country.position[0], country.position[1])}
        point={{ pixelSize: 10, color: Color.BLACK }}
        description={country.name}
      />
      ))}
    </Viewer>
  );
}
