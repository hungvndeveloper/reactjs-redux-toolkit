import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        age: 0,
        gender: "",
    },
    reducers: {
        setUserName: (state, action) => {
            state.name = action.payload;
        },
        setUserAge: (state, action) => {
            state.age = action.payload;
        },
        setUserGender: (state, action) => {
            state.gender = action.payload;
        },
    },
});

export const { setUserName, setUserAge, setUserGender } = userSlice.actions;
export default userSlice.reducer;