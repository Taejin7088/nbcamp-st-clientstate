import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const message = createSlice({
  name: "message",

  initialState,

  reducers: {
    onMessageChange: (_, { payload }) => {
      return payload;
    },
  },
});

export const { onMessageChange } = message.actions;
export default message.reducer;
