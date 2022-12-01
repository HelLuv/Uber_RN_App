import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from "@rneui/themed";
import {NavigationProp, useNavigation} from "@react-navigation/native";

import Map from "../../components/map-screen/Map";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import NavigateCard from "../../components/map-screen/NavigateCard";
import RideOptionsCard from "../../components/map-screen/RideOptionsCard";


const Stack = createNativeStackNavigator();

const MapScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        className="bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full"
        activeOpacity={0.5}
      >
        <Icon name="menu"/>
      </TouchableOpacity>

      <View className="h-1/2">
        <Map/>
      </View>

      <View className="h-1/2">
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
};

export default MapScreen;