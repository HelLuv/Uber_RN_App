import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {Icon} from "@rneui/themed";


const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "Earth Station"
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "Moon Square"
  },
]

const NavFavorites: React.FC = () => {

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={{height: 0.5}} className="bg-gray-200"/>
      )}
      renderItem={({item: {location, destination, icon}}) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <View className="mr-4 rounded-full bg-gray-300 p-3">
            <Icon
              name={icon}
              type="ionicon"
              color="white"
              size={18}
            />
          </View>
          <View>
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
};

export default NavFavorites;