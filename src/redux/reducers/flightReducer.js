import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    Adults: "",
    Youth: '',
    Child: "",
    UnderAge: ""
}

const flight = createSlice({
    name: "flight",
    initialState,
    reducers: {
        totalAdults: (state, { payload }) => {
            state.Adults = payload;
        },
        totalYouth: (state, { payload }) => {
            state.Youth = payload;
        },
        totalChild: (state, { payload }) => {
            state.Child = payload;
        },
        totalUnderAge: (state, { payload }) => {
            state.UnderAge = payload;
        }
    }
})
export const { totalAdults, totalChild, totalYouth, totalUnderAge } = flight.actions

export default flight.reducer;