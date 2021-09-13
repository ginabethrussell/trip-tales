import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNav from "./src/navigation/MainStackNav";
import AppLoading from "expo-app-loading";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import tripsReducer from "./src/store/trips-reducer";

import {
  useFonts,
  Overpass_300Light,
  Overpass_300Light_Italic,
  Overpass_400Regular,
  Overpass_400Regular_Italic,
  Overpass_600SemiBold,
  Overpass_600SemiBold_Italic,
  Overpass_700Bold,
  Overpass_700Bold_Italic,
} from "@expo-google-fonts/overpass";

const rootReducer = combineReducers({
  trips: tripsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  let [fontsLoaded] = useFonts({
    Overpass_300Light,
    Overpass_300Light_Italic,
    Overpass_400Regular,
    Overpass_400Regular_Italic,
    Overpass_600SemiBold,
    Overpass_600SemiBold_Italic,
    Overpass_700Bold,
    Overpass_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <MainStackNav />
          <StatusBar style="auto" />
        </NavigationContainer>
      </Provider>
    );
  }
}
