import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TripListScreen from "../screens/TripListScreen";
import AddTripScreen from "../screens/AddTripScreen";
import TripTalesScreen from "../screens/TripTalesScreen";

const Stack = createNativeStackNavigator();

const MainStackNav = () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: "#383838",
      headerTitleStyle: {
        fontFamily: "Overpass_400Regular",
        fontSize: 16,
      },
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerShadowVisible: true,
    }}
  >
    <Stack.Screen
      name="Trip List"
      component={TripListScreen}
      options={{
        title: "Trip Tales",
        headerLargeTitle: true,
        headerLargeTitleStyle: {
          fontFamily: "Overpass_700Bold",
          fontSize: 26,
        },
      }}
    />
    <Stack.Screen name="Add Trip" component={AddTripScreen} />
    <Stack.Screen name="Trip Tales" component={TripTalesScreen} />
  </Stack.Navigator>
);

export default MainStackNav;
