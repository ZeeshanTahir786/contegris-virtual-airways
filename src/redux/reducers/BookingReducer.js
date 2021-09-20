import { createSlice } from "@reduxjs/toolkit";
import { flights } from "../../constants"

const initialState = {
    flights: flights,
}

const booking = createSlice({
    name: "booking",
    initialState,
    reducers: {
        bookingFlight: (state, { payload }) => {
            return state;
        }
    }
});

export const { bookingFlight } = booking.actions;

export default booking.reducer;