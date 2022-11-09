import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import ListsSlice from './ListsSlice.js';
import ModalSlice from './ModalSlice.js';



export const store = configureStore({
  reducer: {
    lists: ListsSlice,
    modal: ModalSlice
    // counter: counterReducer,
  },
});
