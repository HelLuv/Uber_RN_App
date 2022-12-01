import * as React from 'react';
import {View, Text} from 'react-native';
import MapView from "react-native-maps";
import {useRef} from "react";

import {useAppDispatch, useAppSelector} from "../../../store";
import {selectDestination, selectOrigin} from "../../../store/slices/navSlice";


const Map: React.FC = () => {
  const origin = useAppSelector(selectOrigin);
  const destination = useAppSelector(selectDestination);
  const mapRef = useRef();
  const dispatch = useAppDispatch();


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

    </MapView>
  )
};

export default Map;