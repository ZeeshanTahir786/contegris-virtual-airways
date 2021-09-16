import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: "abc@gmail.com",
    password: "123456789",
    username: "abc",
    userType: "",
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signInReducer: (state) => {
            return state;
        },
        signUpReducer: (state, { payload }) => {
            return state += payload;
        },
        signInAsGuest: (state, { payload }) => {
            return state.userType += payload
        }
    }
})
export const { signInReducer, signUpReducer } = authSlice.actions;
export default authSlice.reducer;