import * as React from 'react';
import MapView, {Marker} from "react-native-maps";
import {useEffect, useRef} from "react";
import {GOOGLE_API_KEY, MAP_VIEW_DIRECTIONS_KEY} from "@env";
import MapViewDirections from "react-native-maps-directions";

import {useAppSelector} from "../../../store";
import {selectDestination, selectOrigin} from "../../../store/slices/navSlice";
import {useGetTravelTime} from "../../../hooks/useGetTravelTime";


const Map: React.FC = () => {
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const mapRef = useRef<MapView>();
  const getTravelTime = useGetTravelTime();


  useEffect(() => {
    if (!origin || !destination) return;
    if (mapRef.current) {
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: {top: 50, right: 50, bottom: 50, left: 50}
      });
    }
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    getTravelTime(origin, destination);
  }, [origin, destination, GOOGLE_API_KEY]);


  return (
    <MapView
      ref={mapRef}
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          apikey={MAP_VIEW_DIRECTIONS_KEY}
          origin={origin.description}
          destination={destination.description}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  )
};

export default Map;