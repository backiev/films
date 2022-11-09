import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: 'lists',
    initialState: {
        modalActive: {active: false, idFilm: -1}
    },
    reducers: {
        activatedModal: (state, action) => {
            state.modalActive.active = true;
            if (action.payload >= 0) {
                state.modalActive.idFilm = action.payload;
            }
        },
        disActivatedModal: (state, action) => {
            state.modalActive.active = false;
        },
        clearIdFilm: (state) => {
            state.modalActive.idFilm = -1;
        }
    }
});

export const {activatedModal, disActivatedModal, clearIdFilm} = modalSlice.actions;

export default modalSlice.reducer