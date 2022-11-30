import * as React from 'react';
import {View, SafeAreaView} from 'react-native';

import NavTop from "../../components/home-screen/NavTop";
import NavOptions from "../../components/home-screen/NavOptions";
import NavFavorites from "../../components/home-screen/NavFavorites";


const HomeScreen: React.FC = () => {

  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <NavTop/>
        <NavOptions/>
        <NavFavorites/>
      </View>
    </SafeAreaView>
  )
};

export default HomeScreen;