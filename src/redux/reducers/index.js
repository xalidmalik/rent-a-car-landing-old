import { combineReducers } from "redux";
import { fetchAvailableCarsReducers } from "./car";
import { customerCreateReducers } from "./customer";
import { createReservationReducers } from "./reservation";

export default combineReducers({
  availableCar: fetchAvailableCarsReducers,
  addCustomer: customerCreateReducers,
  addReservation: createReservationReducers
});
