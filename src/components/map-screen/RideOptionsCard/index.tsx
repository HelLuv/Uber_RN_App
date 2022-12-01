import * as React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {Icon} from "@rneui/themed";

import {useAppSelector} from "../../../store";
import {selectTravelTimeInfo} from "../../../store/slices/navSlice";
import RideOptionsList from "./components/RideOptionsList";
import {selectRide} from "../../../store/slices/rideSlice";


const RideOptionsCard: React.FC = () => {
  const travelTimeInfo = useAppSelector(selectTravelTimeInfo);
  const selectedRide = useAppSelector(selectRide);

  return (
    <SafeAreaView className="bg-white flex-grow flex-1">
      <View style={{zIndex: 1}}>
        <TouchableOpacity
          activeOpacity={0.5}
          className="absolute top-3 left-5 z-100 p-3 rounded-full"
        >
          <Icon
            name="chevron-left"
            type="font-awesome-5"
          />
        </TouchableOpacity>
        <Text className="text-center py-5 text-xl">
          Select a Ride — {travelTimeInfo?.distance.text ?? '10.4 km'}
        </Text>
      </View>

      <RideOptionsList/>

      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity
          disabled={!selectedRide}
          className={`bg-black py-3 m-3 ${!selectedRide && "bg-gray-300"}`}
        >
          <Text className="text-center text-white text-xl">
            Choose {selectedRide?.title}
          </Text>

        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};

export default RideOptionsCard;