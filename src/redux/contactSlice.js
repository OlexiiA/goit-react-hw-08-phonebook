import { createSlice} from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        filter: '',
    },
    reducers: {

        addItems (state, action){
            state.contacts.push({
                id: new Date().toISOString(),
                name: action.payload.name,
                number: action.payload.number,
            });
        },
        addFilter(state, action) {
            state.filter = action.payload;
          },
          deleteContact(state, action) {
            state.items = state.contacts.filter((contact) => contact.id !== action.payload);
          },
    }
});

export const {addItems, addFilter, deleteContact} = contactSlice.actions;
export default contactSlice.reducer;