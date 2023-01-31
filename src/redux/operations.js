import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const url = 'https://mockapi.io/clone/63d7e9105dbd7232442fc0bc.mockapi.io/';

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

