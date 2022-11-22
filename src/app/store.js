import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import ListsSlice from './ListsSlice.js';
import ModalSlice from './ModalSlice.js';
// import hurtSlice from './HurtSlice.js';
import hurtSlice from './HurtSlice.js';



export const store = configureStore({
  reducer: {
    lists: ListsSlice,
    modal: ModalSlice,
    hurts: hurtSlice
    // counter: counterReducer,
  },
});
