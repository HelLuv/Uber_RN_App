import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {Icon} from "@rneui/themed";

import {useAppSelector} from "../../../store";
import {selectOrigin} from "../../../store/slices/navSlice";


const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen"
  },
  {
    id: "2",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen"
  }
]

const NavOptions: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const origin = useAppSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal={true}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          disabled={!origin}
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          onPress={() => navigation.navigate(item.screen)}
        >
          <View className={`${!origin && "opacity-20"}`}>
            <Image
              style={{width: 120, height: 120, resizeMode: "contain"}}
              source={{uri: item.image}}
            />
            <Text className="mt-2 text-lg font-semibold">{item.title}</Text>

          </View>
          <View className="p-2 bg-black rounded-full w-10 mt-4">
            <Icon name="arrowright" color="white" type="antdesign"/>
          </View>
        </TouchableOpacity>
      )}
    />
  )
};

export default NavOptions;