import React, { useState } from "react";
import Marker from "../components/Marker";
import GoogleMapReact from "google-map-react";

const SimpleMap = (props: any) => {
  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };

  const [center, setCenter] = useState({ lat: 6.458985, lng: 3.601521 });
  const [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={getMapOptions}
      >
        <Marker lat={6.458985} lng={3.601521} name="My Marker" color="green" />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
