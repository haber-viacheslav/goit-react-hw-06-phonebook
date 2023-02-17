import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = [
  { id: '1', name: 'Eric', number: '+380995556644' },
  { id: '12', name: 'mark', number: '+380995556644' },
  { id: '13', name: 'nika', number: '+380995556644' },
  { id: '11', name: 'sonya', number: '+380995556644' },
  { id: '10', name: 'lice', number: '+380995556644' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            ...value,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id !== action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
