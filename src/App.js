import { Cartesian3, Color } from "cesium";
import { Viewer, Entity } from "resium";

export default function App() {
  return (
    <Viewer full>
      <Entity
        name="Philadelphia"
        position={Cartesian3.fromDegrees(-75.165222, 39.952583)}
        point={{ pixelSize: 10, color: Color.BLACK }}
        description="hoge"
      />
    </Viewer>
  );
}