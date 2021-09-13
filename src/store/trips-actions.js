import * as FileSystem from "expo-file-system";
export const ADD_TRIP = "ADD_TRIP";

export const addTrip = (trip) => {
  return async (dispatch) => {
    const fileName = trip.coverImage.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
      await FileSystem.moveAsync({
        from: trip.coverImage,
        to: newPath,
      });

      dispatch({
        type: ADD_TRIP,
        payload: {
          id: new Date(),
          title: trip.title,
          cover: newPath,
          destination: trip.destination,
          startDate: trip.startDate,
          endDate: trip.endDate,
        },
      });
    } catch (err) {
      throw err;
    }
  };
};
