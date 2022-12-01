import * as React from 'react';
import {Image} from 'react-native';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {GOOGLE_API_KEY} from "@env"

import {useAppDispatch} from "../../../store";
import {setDestination, setOrigin} from "../../../store/slices/navSlice";


const NavTop: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Image
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain'
        }}
        source={{uri: "https://links.papareact.com/gzs"}}
      />

      <GooglePlacesAutocomplete
        placeholder="Where from?"
        enablePoweredByContainer={false}
        minLength={2}
        fetchDetails={true}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={300}
        predefinedPlaces={[{
          geometry: {location: {lat: 51.503399, lng: -0.119519}},
          description: 'London, London Eye'
        }]}
        onPress={(data, detail) => {
          dispatch(setOrigin({
            location: detail.geometry.location,
            description: data.description,
          }));
          dispatch(setDestination(null));
        }}
        styles={{
          container: {
            flex: 0,
          },
          textInput: {
            fontSize: 18,
          }
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: 'en'
        }}
      />
    </>
  )
};

export default NavTop;