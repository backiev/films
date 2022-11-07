import { createSlice } from "@reduxjs/toolkit";


const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: [{index: 0, name: 'first', value: []}, {index: 1, name: 'second', value: []}]
    },
    reducers: {
        createList: (state, action) => {
            // console.log(state.lists);
            state.lists.push({index: state.lists.length, name: action.payload, value: []})
        }
    }
});

export const {createList} = listsSlice.actions;

export default listsSlice.reducer