import { combineReducers } from "redux";
import detailUserReducer from "./detailUser";
import passengerReducer from "./passengerData";
import listProductReducer from "./listProduct";
import detailProductReducer from "./detailProduct";
import listAirlineReducer from "./listAirline";
import listMyBookingReducer from "./transaction";
import detailMyBookingReducer from "./detailBooking";
import createAirlinesReducer from "./createAirline";
import detailAirlineReducer from "./detailAirline";
import editAirlinesReducer from "./editAirline";
import listBookingReducer from "./listBooking";
import destinationReducer from "./listDestination";
import createDestinationsReducer from "./createDestination";
import editDestinationReducer from "./editDestination";

const rootReducers = combineReducers({
  detailUser: detailUserReducer,
  listDestination: destinationReducer,
  passenger: passengerReducer,
  listProduct: listProductReducer,
  listAirline: listAirlineReducer,
  listBooking: listBookingReducer,
  detailProduct: detailProductReducer,
  myBooking: listMyBookingReducer,
  detailBooking: detailMyBookingReducer,
  createAirline: createAirlinesReducer,
  detailAirline: detailAirlineReducer,
  editAirline: editAirlinesReducer,
  createDestination: createDestinationsReducer,
  editDestination: editDestinationReducer,
});

export default rootReducers;
