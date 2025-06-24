import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet's default icon issue in some environments
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Example points with id, name, latitude, and longitude
const locations = [
  { id: 1, name: "Point A", lat: 40.7128, lng: -74.006 },
  { id: 2, name: "Point B", lat: 34.0522, lng: -118.2437 },
  { id: 3, name: "Point C", lat: 51.5074, lng: -0.1278 },
];

export default function Map() {
  return (
    <MapContainer
      center={[40.7128, -74.006]}
      zoom={2}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map(({ id, name, lat, lng }) => (
        <Marker key={id} position={[lat, lng]}>
          <Popup>{name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
