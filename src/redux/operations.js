import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const url = 'https://63d96a4e74f386d4efeb5939.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk('contacts/fetch', async () => {
  const { data } = await axios.get(url);
  return data;
});

export const addContact = createAsyncThunk('contacts/add', async contact => {
  const { data } = await axios.post(url, contact);
  return data;
});

export const deleteContact = createAsyncThunk('contacts/delete', async id => {
  const { data } = await axios.delete(`${url}/${id}`);
  return data;
});


