import { createSlice } from "@reduxjs/toolkit";


const listsSlice = createSlice({
    name: 'lists',
    initialState: {
        lists: [
            {index: 0, name: 'Любимые фильмы', note: 'Мои самые любимые фильмы', value: [4532097, 4381953, 1451292, 4633578]},
            {index: 1, name: 'Самые плохие фильмы', note: 'Я их ненавижу', value: [4532097, 4381953, 1451292, 4633578, 1268791]},
            {index: 2, name: 'Фильмы MARVEL', note: 'Все фильмы MARVEL которые посмотрел', value: [1309570, 1199100]},
        ]
    },
    reducers: {
        createList: (state, action) => {
            state.lists.push({index: parseInt(state.lists[state.lists.length-1].index) + 1, name: action.payload, value: []})
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
        removeList: (state, action) => {
            state.lists.splice(action.payload, 1);
        },
        editNote: (state, action) => {
            state.lists[action.payload.indexList].note = action.payload.newNote;
        },
        dragDrop: (state, action) => {
            const currentList = state.lists[action.payload.indexList];
            const currentIdMovie = action.payload.currentMovie;
            const idMovie = action.payload.idMovie;
            currentList.value.map((e, index) => {
                if (e === idMovie) {
                    const newListValue = currentList.value.splice(index, 1, currentIdMovie);
                    return {...currentList, value: newListValue};
                } else if (e === currentIdMovie) {
                    const newListValue = currentList.value.splice(index, 1, idMovie);
                    return {...currentList, value: newListValue};
                } else {
                    return;
                }
            });
        }
    }
});

export const {createList, addToList, addToLastList, removeFromList, removeList, editNote, dragDrop} = listsSlice.actions;

export default listsSlice.reducer;