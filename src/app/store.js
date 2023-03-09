import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import ListsSlice from './ListsSlice.js';



export const store = configureStore({
  reducer: {
    lists: ListsSlice,
    // counter: counterReducer,
  },
});
