import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
      items: [],
      isLoading: false,
      error: null,
  },

  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, state => {
      state.error = 'Something went wrong, try again later...';
    });

    builder.addCase(addContact.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = [...state.items, action.payload];
    });
    builder.addCase(addContact.rejected, state => {
      state.isLoading = false;
      state.error = 'Adding went wrong...';
    });

    builder.addCase(deleteContact.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter(
        contact => contact.id !== action.payload.id
      );
    });
    builder.addCase(deleteContact.rejected, state => {
      state.isLoading = false;
      state.error = 'Deleting went wrong...';
    });
  },
});

export const contactReducer = contactsSlice.reducer;

