import { createSlice } from "@reduxjs/toolkit";


const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: [
            {index: 0, name: 'first', value: []}, 
            {index: 1, name: 'second', value: []},
            {index: 2, name: 'second', value: [1402886]},
            {index: 3, name: 'second', value: [4532097]},
            {index: 4, name: 'second', value: []},
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
        },
        removeFromList: (state, action) => {
            state.lists[action.payload.indexList].value.splice(action.payload.idMovie, 1);
        }
    }
});

export const {createList, addToList, addToLastList, removeFromList} = listsSlice.actions;

export default listsSlice.reducer;