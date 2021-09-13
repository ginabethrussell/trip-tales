import React from "react";
import { View, Text } from "react-native";

const TripTalesScreen = ({ navigation, route }) => {
  const title = route.params.trip.title;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation]);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Add Your Trip Tales Here</Text>
    </View>
  );
};

export default TripTalesScreen;
