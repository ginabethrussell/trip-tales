import React from "react";
import { View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NoTripsCard from "../components/NoTripsCard";
import { useSelector } from "react-redux";
import TripCard from "../components/TripCard";

const TripListScreen = ({ navigation }) => {
  const trips = useSelector((state) => state.trips.trips);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate("Add Trip")}
        >
          <Ionicons name="add-circle-outline" size={26} color="#383838" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  if (trips.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <NoTripsCard />
      </View>
    );
  } else {
    return (
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TripCard navigation={navigation} trip={item} />
        )}
        contentContainerStyle={{ alignItems: "center" }}
      />
    );
  }
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    alignItems: "center",
  },
});

export default TripListScreen;
