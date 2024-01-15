import React, { useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './App.css';
import fetchData from './Server/sgAPI'

import "leaflet/dist/leaflet.css";

// App.js



async function fetchDataAndLog() {
  try {
    const data = await fetchData();
    console.log(JSON.stringify(data));
    // Use the data as needed in your application
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

console.log(fetchDataAndLog())

// fffff

const defaultCenter = [1.290, 103.851];
const defaultZoom = 11;

function App() {
  const mapRef = useRef();

 
  return (
    <div className="App">
      <MapContainer ref={mapRef} center={defaultCenter} zoom={defaultZoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
      </MapContainer>
    </div>
  );
}

export default App;
