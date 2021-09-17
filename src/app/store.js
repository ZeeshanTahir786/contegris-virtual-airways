import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import AuthReducer from "../redux/reducers/authReducer"
import flightReducer from '../redux/reducers/flightReducer';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth: AuthReducer,
    flight: flightReducer,
  },
});
