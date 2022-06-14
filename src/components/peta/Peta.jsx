import dataPeta from '../../data/indonesia-prov.json'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from "react-leaflet";
import './Peta.scss'
import { Icon } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png";

const Peta = () => {
    let data = dataPeta.map((map) => map.geojson);
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
              <GeoJSON 
              data={data}></GeoJSON>
              {dataPeta.map((data) =>
              <Marker
                position={[data.lat, data.long]}
                icon={
                    new Icon({
                        iconUrl: markerIconPng,
                        iconsize: [10, 10],
                        iconAnchor: [12, 41]
                    })
                }
            >
                <Popup>{data.name}</Popup>
            </Marker>
              )}
          </MapContainer>
      </div>
  );
};

export default Peta;