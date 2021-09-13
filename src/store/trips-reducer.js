import { ADD_TRIP } from "./trips-actions";
import Trip from "../models/trip";
const initialState = {
  trips: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRIP:
      const newTrip = new Trip(
        action.payload.id.toString(),
        action.payload.title,
        action.payload.destination,
        action.payload.startDate,
        action.payload.endDate,
        action.payload.cover
      );
      return {
        ...state,
        trips: state.trips.concat(newTrip),
      };
    default:
      return state;
  }
};
