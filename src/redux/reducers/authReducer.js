import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: "",
    password: "",
    username: "",
    userType: "",
    search: "",
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signInReducer: (state, { payload }) => {
            state.email = payload.email;
            state.password = payload.password;
            state.username = payload.username;
            state.userType = "";
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
            state.userType = "";
        },
        onSearch: (state, { payload }) => {
            state.search = payload
        }
    }
})
export const { signInReducer, signUpReducer, signInAsGuest, logout, onSearch } = authSlice.actions;
export default authSlice.reducer;