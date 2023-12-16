import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counterSlice';
import messagerReducer from '../slices/messageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    message: messagerReducer,
  },
});
