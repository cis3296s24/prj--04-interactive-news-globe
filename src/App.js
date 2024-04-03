import { Cartesian3, Color } from "cesium";
import { Viewer, Entity } from "resium";

export default function App() {
  const countries = [
    { name: 'China', position: [116.3833, 39.9167] },
    { name: 'India', position: [78.9629, 20.5937] },
    { name: 'United States', position: [-95.7129, 37.0902] },
    { name: 'Canada', position: [-106.3468, 56.1304] },
    { name: 'Brazil', position: [-49.2654, -14.2350] },
    { name: 'Russia', position: [105.3188, 61.5240] },
    { name: 'Philadelphia', position:[-75.165222, 39.952583] }
  ];

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
