import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";


const NavTop: React.FC = () => {

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
          console.log({data, detail})
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
          key: 'some_google_key',
          language: 'en'
        }}
      />
    </>
  )
};

export default NavTop;