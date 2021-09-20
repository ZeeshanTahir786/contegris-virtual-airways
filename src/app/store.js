import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from "../redux/reducers/authReducer"
import BookingReducer from '../redux/reducers/BookingReducer';
import flightReducer from '../redux/reducers/flightReducer';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth: AuthReducer,
    flight: flightReducer,
    booking: BookingReducer,
  },
});
