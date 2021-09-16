import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import AuthReducer from "../redux/reducers/authReducer"

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    auth: AuthReducer,
  },
});
