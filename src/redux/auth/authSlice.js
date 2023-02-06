import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logIn, logOut } from './authOperation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => builder
  .addCase(registerUser.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  })
  .addCase(logIn.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  })
  .addCase(logOut.fulfilled, (state, action) => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
  })
});

export const authReduser = authSlice.reducer;
