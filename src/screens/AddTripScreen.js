import React from "react";
import {
  ScrollView,
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import ImagePicker from "../components/ImagePicker";
import { useDispatch } from "react-redux";
import * as tripActions from "../store/trips-actions";

const AddTripScreen = ({ navigation }) => {
  const [title, setTitle] = React.useState("");
  const [destination, onChangeDestination] = React.useState("");
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [coverImage, setCoverImage] = React.useState(null);
  const dispatch = useDispatch();
  const onChangeStart = (event, selectedDate) => {
    setStartDate(selectedDate);
  };

  const onChangeEnd = (event, selectedDate) => {
    setEndDate(selectedDate);
  };

  const onSaveHandler = () => {
    const newTrip = {
      title: title,
      destination: destination,
      startDate: format(startDate, "PPP"),
      endDate: format(endDate, "PPP"),
      coverImage: coverImage,
    };
    dispatch(tripActions.addTrip(newTrip));
    navigation.navigate("Trip List");
  };

  const imageSelectedHandler = (imagePath) => {
    setCoverImage(imagePath);
  };

  return (
    <ScrollView contentContainerStyle={styles.screenWrapper}>
      <View style={styles.form}>
        <Text style={styles.label}>Trip Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setTitle(text)}
          placeholder="trip title"
          value={title}
        />
        <Text style={styles.label}>Trip Destination</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeDestination}
          placeholder="trip destination"
          value={destination}
        />

        <Text style={styles.label}>Select Start Date</Text>
        <DateTimePicker
          value={startDate}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChangeStart}
          textColor="black"
        />

        <Text style={styles.label}>Select End Date</Text>
        <DateTimePicker
          testID="dateTimePicker"
          value={endDate}
          is24Hour={true}
          display="default"
          onChange={onChangeEnd}
          mode="date"
        />
        <Text style={styles.label}>Select a cover image</Text>
        <ImagePicker onImageSelected={imageSelectedHandler} />
      </View>

      <View style={{ flex: 1 }}></View>
      <View style={{ marginBottom: 30 }}>
        <Button title="SAVE" onPress={onSaveHandler} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    alignItems: "center",
  },
  form: {
    width: "80%",
    margin: 30,
  },
  label: {
    color: "#383838",
    fontFamily: "Overpass_400Regular",
    fontSize: 18,
    marginBottom: 15,
    marginTop: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
    fontSize: 18,
    color: "#383838",
    fontFamily: "Overpass_400Regular",
  },
});

export default AddTripScreen;
