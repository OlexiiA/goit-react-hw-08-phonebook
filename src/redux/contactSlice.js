import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchContacts.pending, state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    });
    builder.addCase(fetchContacts.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = action.payload;
    });
    builder.addCase(fetchContacts.rejected, state => {
      state.contacts.error = 'Something went wrong, try again later...';
    });

    builder.addCase(addContact.pending, state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    });
    builder.addCase(addContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = [...state.contacts.items, action.payload];
    });
    builder.addCase(addContact.rejected, state => {
      state.contacts.isLoading = false;
      state.contacts.error = 'Adding went wrong...';
    });

    builder.addCase(deleteContact.pending, state => {
      state.contacts.isLoading = true;
      state.contacts.error = null;
    });
    builder.addCase(deleteContact.fulfilled, (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload.id
      );
    });
    builder.addCase(deleteContact.rejected, state => {
      state.contacts.isLoading = false;
      state.contacts.error = 'Deleting went wrong...';
    });
  },
});

export const { addFilter } = contactsSlice.actions;

export default contactsSlice.reducer;










// import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from './operations';

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     filter: '',
//   },
//   reducers: {
//     addFilter: (state, action) => {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: {
//     [fetchContacts.pending]: state => {
//       state.contacts.isLoading = true;
//       state.contacts.error = null;
//     },
//     [fetchContacts.fulfilled]: (state, action) => {
//       state.contacts.isLoading = false;
//       state.contacts.items = action.payload;
//     },
//     [fetchContacts.rejected]: state => {
//       state.contacts.error = 'Something went wrong, try again later...';
//     },

//     [addContact.pending]: state => {
//       state.contacts.isLoading = true;
//       state.contacts.error = null;
//     },
//     [addContact.fulfilled]: (state, action) => {
//       state.contacts.isLoading = false;
//       state.contacts.items = [...state.contacts.items, action.payload];
//     },
//     [addContact.rejected]: state => {
//       state.contacts.isLoading = false;
//       state.contacts.error = 'Adding went wrong...';
//     },

//     [deleteContact.pending]: state => {
//       state.contacts.isLoading = true;
//       state.contacts.error = null;
//     },
//     [deleteContact.fulfilled]: (state, action) => {
//       state.contacts.isLoading = false;
//       state.contacts.items = state.contacts.items.filter(
//         contact => contact.id !== action.payload.id
//       );
//     },
//     [deleteContact.rejected]: state => {
//       state.contacts.isLoading = false;
//       state.contacts.error = 'Deleting went wrong...';
//     },
//   },
// });

// export const { addFilter } = contactsSlice.actions;

// export default contactsSlice.reducer;
