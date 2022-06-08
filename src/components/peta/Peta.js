import dataPeta from '../../data/indonesia-prov.geojson'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import './Peta.css'

const Peta = () => {
  return (
      <div className="body">
          <MapContainer
              center={[-2, 118]}
              zoom={5.4}
              scrollWheelZoom={false}
              style={{ height: "68.5vh" }}
          >
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeoJSON data={dataPeta.cok}></GeoJSON>
          </MapContainer>
      </div>
  );
};

export default Peta;