import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const TripCard = ({ trip, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Trip Tales", { trip })}
    >
      <View style={styles.card}>
        <Image source={{ uri: trip.imageUri }} style={styles.image} />
        <Text style={styles.title}>{trip.title}</Text>
        <Text style={styles.destination}>{trip.destination}</Text>
        <Text style={styles.dates}>{trip.startDate}</Text>
        <Text style={styles.dates}>to</Text>
        <Text style={styles.dates}>{trip.endDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: "auto",
    width: 200,
    marginTop: 20,
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
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    height: 120,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    color: "#383838",
    fontFamily: "Overpass_600SemiBold",
    fontSize: 18,
    marginTop: 10,
    textTransform: "uppercase",
    textAlign: "center",
  },
  destination: {
    color: "#383838",
    fontFamily: "Overpass_400Regular",
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  dates: {
    color: "#383838",
    fontFamily: "Overpass_400Regular",
    fontSize: 14,
    textAlign: "center",
  },
});
export default TripCard;
