import { createSlice } from "@reduxjs/toolkit";


const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: [
            {index: 0, name: 'second', value: [4532097, 4381953, 1451292, 4633578]},
            {index: 1, name: 's1', value: [4532097, 4381953, 1451292, 4633578, 1268791]},
            {index: 2, name: 's2', value: [4532097, 4381953, 1451292, 4633578, 1268791, 4346060]},
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
            state.lists[action.payload.idList].value.splice(action.payload.idMovie, 1);
        },
        dragDrop: (state, action) => {
            const currentList = state.lists[action.payload.indexList];
            const currentIdMovie = action.payload.currentMovie;
            const idMovie = action.payload.idMovie;
            currentList.value.map((e, index) => {
                if (e === idMovie) {
                    const newListValue = currentList.value.splice(index, 1, currentIdMovie);
                    return {...currentList, value: newListValue};
                }
                if (e === currentIdMovie) {
                    const newListValue = currentList.value.splice(index, 1, idMovie);
                    return {...currentList, value: newListValue};
                }
            });
        }
    }
});

export const {createList, addToList, addToLastList, removeFromList, dragDrop} = listsSlice.actions;

export default listsSlice.reducer;