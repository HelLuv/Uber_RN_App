import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from "react-native-google-places-autocomplete";
import {GOOGLE_API_KEY} from "@env";
import {NavigationProp, useNavigation} from "@react-navigation/native";

import {useAppDispatch} from "../../../store";
import {setDestination} from "../../../store/slices/navSlice";
import NavFavorites from "../../home-screen/NavFavorites";
import Footer from "./components/Footer";
import {useEffect} from "react";


const NavigateCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    dispatch(setDestination(null));
  }, []);


  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Good morning, Nick!</Text>
      <View className="border-t border-gray-200 flex-shrink z-10">
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          styles={toInputBoxStyles}
          enablePoweredByContainer={false}
          minLength={2}
          fetchDetails={true}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={300}
          predefinedPlaces={[{
            geometry: {location: {lat: 51.505554, lng: -0.075278}},
            description: 'London, Tower Bridge'
          }]}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en'
          }}
          onPress={(data, detail) => {
            dispatch(setDestination({
              location: detail.geometry.location,
              description: data.description,
            }));

            navigation.navigate('RideOptionsCard')
          }}
        />
      </View>

      <NavFavorites/>

      <Footer/>
    </SafeAreaView>
  )
};

export const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
})

export default NavigateCard;