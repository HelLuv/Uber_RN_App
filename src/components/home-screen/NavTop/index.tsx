import * as React from 'react';
import {Image} from 'react-native';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {GOOGLE_API_KEY} from "@env"

import {useAppDispatch} from "../../../store";
import {setDestination, setOrigin} from "../../../store/slices/navSlice";


const NavTop: React.FC = () => {
  const dispatch = useAppDispatch();

  console.log(GOOGLE_API_KEY)
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
        debounce={400}
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