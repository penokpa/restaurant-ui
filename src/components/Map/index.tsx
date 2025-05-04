import GoogleMapReact from "google-map-react";
import { MapPin } from "react-feather";

import { StyledDiv } from "./style";

export type MapProps = {
  latitude: number;
  longitude: number;
  zoomLevel: number;
  apiKey?: string;
  testId?: string;
};

const Map = ({ latitude, longitude, zoomLevel, apiKey, testId }: MapProps) => {
  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: zoomLevel,
  };

  const GoogleMapComponent = GoogleMapReact as any;

  return (
    <StyledDiv className="map-wrapper">
      <GoogleMapComponent
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        data-testid={testId}
      >
        <Marker />
      </GoogleMapComponent>
    </StyledDiv>
  );
};

export default Map;

const Marker = () => {
  return (
    <div style={{ color: "red" }}>
      <MapPin />
    </div>
  );
};
