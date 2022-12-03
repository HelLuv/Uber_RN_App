import {StatusBar} from 'expo-status-bar';
import {Provider} from "react-redux";
import {KeyboardAvoidingView, Platform} from "react-native";

import store from "./src/store";
import Navigation from "./src/navigation";


export default function App() {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex: 1}}
      >
        <Navigation/>
        <StatusBar style="auto"/>
      </KeyboardAvoidingView>
    </Provider>
  );
};

