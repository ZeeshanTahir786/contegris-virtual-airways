import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: "",
    password: "",
    username: "",
    userType: "",
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signInReducer: (state, { payload }) => {
            state.email = payload.email;
            state.password = payload.password;
            state.username = payload.username;
        },
        signUpReducer: (state, { payload }) => {
            state.email = payload.email;
            state.password = payload.password;
            state.username = payload.firstname;
        },
        signInAsGuest: (state, { payload }) => {
            state.userType += payload;
        },
        logout: (state) => {
            state.email = "";
            state.username = "";
            state.password = "";
            state.userType = ""
        },
    }
})
export const { signInReducer, signUpReducer, signInAsGuest, logout } = authSlice.actions;
export default authSlice.reducer;