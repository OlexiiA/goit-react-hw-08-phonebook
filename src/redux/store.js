import { configureStore } from '@reduxjs/toolkit';
import { authReduser } from './auth/authSlice';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: authReduser,
  },
});

export default store;
