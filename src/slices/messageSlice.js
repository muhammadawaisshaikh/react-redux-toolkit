import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    update: (state, action) => {
      state.value = action.payload;
    },
    remove: (state) => {
      state.value = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { update, remove } = messageSlice.actions;

export default messageSlice.reducer;
