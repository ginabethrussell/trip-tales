import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import TripLogo from "../../assets/square_logo.png";
const NoTripsCard = () => {
  return (
    <View style={styles.card}>
      <Image source={TripLogo} style={styles.image} />
      <Text style={styles.buttonText}>Add a Trip</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 200,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#383838",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.29,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  buttonText: {
    color: "#383838",
    fontFamily: "Overpass_400Regular",
    fontSize: 18,
    marginLeft: 5,
    marginTop: 5,
  },
});
export default NoTripsCard;
