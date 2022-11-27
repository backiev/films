import { createSlice } from "@reduxjs/toolkit";


const hurtSlice = createSlice({
    name: 'hurts',
    initialState: {
        hurts: [
            "iconHeartWhite",
            "iconHeartWhite",
            "iconHeartWhite",
            "iconHeartWhite",
            "iconHeartWhite",
            "iconHeartWhite",
            "iconHeartWhite",
            "iconHeartWhite",
            "iconHeartWhite",
            "iconHeartWhite",
        ],
    },
    reducers: {
        setAbleHurt: (state, action) => {
            state.hurts.forEach((e, index) => {
                if (index === action.payload) return state.hurts[index] = "iconHeartRed";
            });
        },
        setDisableHurt: (state, action) => {
            state.hurts.forEach((e, index) => {
                if (index === action.payload) state.hurts[index] = "iconHeartWhite";
            });
        },
        setAllDisableHurt: (state, action) => {
            state.hurts.map((e, index) => state.hurts[index] = "iconHeartWhite");
        }
    }
});

export const {setAbleHurt, setDisableHurt, setAllDisableHurt} = hurtSlice.actions;

export default hurtSlice.reducer;