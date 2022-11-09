import { createSlice } from "@reduxjs/toolkit";


const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: [
            {index: 0, name: 'first', value: []}, 
            {index: 1, name: 'second', value: []}
        ]
    },
    reducers: {
        createList: (state, action) => {
            state.lists.push({index: state.lists.length, name: action.payload, value: []})
        },
        addToList: (state, action) => {
            state.lists[action.payload.idList].value.push(action.payload.idFilm);
        },
        addToLastList: (state, action) => {
            state.lists[state.lists.length-1].value.push(action.payload);
        }
    }
});

export const {createList, addToList, addToLastList} = listsSlice.actions;

export default listsSlice.reducer