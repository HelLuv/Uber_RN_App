import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import Currency from "react-currency-formatter";

import {useAppDispatch, useAppSelector} from "../../../../../store";
import {selectTravelTimeInfo} from "../../../../../store/slices/navSlice";
import {SURGE_CHARGE_RATE} from "../../../../../constants";
import {selectRide, setRide} from "../../../../../store/slices/rideSlice";


const data = [
  {
    id: "Peugeot",
    title: "Peugeot",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Toyota",
    title: "Toyota",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Mercedes",
    title: "Mercedes",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
]


const RideOptionsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedRide = useAppSelector(selectRide);
  const travelTimeInfo = useAppSelector(selectTravelTimeInfo);


  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item: {id, image, multiplier, title}, item}) => (
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => dispatch(setRide(item))}
          className={`flex-row items-center justify-between px-8 ${id === selectedRide?.id && "bg-gray-200"}`}
        >
          <Image
            style={{
              width: 60,
              height: 60,
              resizeMode: 'contain'
            }}
            source={{uri: image}}
          />

          <View className="-ml-4">
            <Text className="text-xl font-semibold">{title}</Text>
            <Text>{travelTimeInfo?.duration.text || '23 min'}</Text>
          </View>

          <Text className="text-xl">
            <Currency
              quantity={((travelTimeInfo?.duration.value ?? 1000) * SURGE_CHARGE_RATE * multiplier) / 100}
              currency="USD"
            />
          </Text>
        </TouchableOpacity>
      )}
    />
  )
};

export default RideOptionsList;