import {StatusBar} from 'expo-status-bar';
import {Text, View} from 'react-native';
import {Provider} from "react-redux";

import store from "./src/store";


export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto"/>
      </View>
    </Provider>
  );
}

