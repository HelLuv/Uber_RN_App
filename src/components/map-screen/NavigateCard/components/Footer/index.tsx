import * as React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {Icon} from "@rneui/themed";
import {NavigationProp, useNavigation} from "@react-navigation/native";

import {useAppSelector} from "../../../../../store";
import {selectDestination} from "../../../../../store/slices/navSlice";


const Footer: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const destination = useAppSelector(selectDestination);

  return (
    <View className="flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100">
      <TouchableOpacity
        activeOpacity={0.5}
        className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
        onPress={() => {
          if (!destination) {
            Alert.alert('Choose destination', 'You should choose destination before you can select a ride');
            return;
          }
          navigation.navigate('RideOptionsCard');
        }}
      >
        <Icon name="car" type="font-awesome" color="white" size={16}/>
        <Text className="text-white text-center">Rides</Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
        onPress={() => Alert.alert('We are already working on it!', 'Stay tuned 🏂')}
      >
        <Icon name="fast-food-outline" type="ionicon" color="white" size={16}/>
        <Text className="text-white text-center">Eats</Text>
      </TouchableOpacity>
    </View>
  )
};

export default Footer;