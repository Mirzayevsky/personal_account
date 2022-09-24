import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Icontacts } from '../../../interfaces/interface'; //model
import { IContactState } from './contactInterface';
import { toast } from 'react-toastify';
import { message } from 'antd';

import {
  getAllContacts,
  createContact,
  getSingleContact,
  editContact,
  deleteContact,
  editPartOfContact
} from './contactAction'; //action

//initial state of reducer
const initialState: IContactState = {
  getAllContactSuccess: false,
  getAllContactLoading: false,
  getAllContactError: false,
  allContacts: {},

  createContactSuccess: false,
  createContactLoading: false,
  createContactError: false,
  createdContact: {},

  getSingleContactSuccess: false,
  getSingleContactLoading: false,
  getSingleContactError: false,
  singleContact: {},

  editContactSuccess: false,
  editContactLoading: false,
  editContactError: false,

  deleteContactSuccess: false,
  deleteContactLoading: false,
  deleteContactError: false,

  editPartOfContactSuccess: false,
  editPartOfContactLoading: false,
  editPartOfContactError: false
};

const ContactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    cleanContact: (state) => {
      state.createContactSuccess = false;
      state.createContactLoading = false;
      state.createContactError = false;
      state.createdContact = {};

      state.editContactSuccess = false;
      state.editContactLoading = false;
      state.editContactError = false;

      state.deleteContactSuccess = false;
      state.deleteContactLoading = false;
      state.deleteContactError = false;

      state.editPartOfContactSuccess = false;
      state.editPartOfContactLoading = false;
      state.editPartOfContactError = false;

      state.getSingleContactLoading = false;
      state.getSingleContactError = false;
      state.getSingleContactSuccess = false;
      state.singleContact = {};
    },
  },
  extraReducers: {
    // get all Cascade-Tools
    [getAllContacts.fulfilled.type]: (state, action: PayloadAction<Icontacts>) => {
      state.getAllContactLoading = false;
      state.getAllContactError = false;
      state.allContacts = action.payload;
      state.getAllContactSuccess = true;
    },
    [getAllContacts.pending.type]: (state) => {
      state.getAllContactLoading = true;
    },
    [getAllContacts.rejected.type]: (state) => {
      state.getAllContactLoading = false;
      state.getAllContactError = true;
      toast.error('Не удалось получить каскадные инструменты!');
    },
    // create Cascade-Tools
    [createContact.fulfilled.type]: (state, action: PayloadAction<Icontacts>) => {
      state.createContactLoading = false;
      state.createContactError = false;
      state.createContactSuccess = true;
      state.createdContact = action.payload;
      state.deleteContactSuccess = false;
      toast.success('Каскадные инструменты созданные успешно!');
    },
    [createContact.pending.type]: (state) => {
      state.createContactLoading = true;
    },
    [createContact.rejected.type]: (state, action) => {
      state.createContactLoading = false;
      state.createContactError = true;
      action.payload === 409 ? toast.error('Каскадные инструменты с таким названием уже существуют!') : toast.error('Не удалось создать каскадные инструменты!');
    },
    // get single Cascade-Tools
    [getSingleContact.fulfilled.type]: (state, action: PayloadAction<Icontacts>) => {
      state.getSingleContactLoading = false;
      state.getSingleContactError = false;
      state.singleContact = action.payload;
      state.getSingleContactSuccess = true;
    },
    [getSingleContact.pending.type]: (state) => {
      state.getSingleContactLoading = true;
    },
    [getSingleContact.rejected.type]: (state) => {
      state.getSingleContactLoading = false;
      state.getSingleContactError = true;
      toast.error('Не удалось получить этот каскадные инструменты!');
    },
    // edit Cascade-Tools
    [editContact.fulfilled.type]: (state) => {
      state.editContactLoading = false;
      state.editContactError = false;
      state.editContactSuccess = true;
      toast.success('Каскадные инструменты успешно изменены!');
    },
    [editContact.pending.type]: (state) => {
      state.editContactLoading = true;
    },
    [editContact.rejected.type]: (state, action) => {
      state.editContactLoading = false;
      state.editContactError = true;
      action.payload === 409 ? toast.error('Каскадные инструменты с таким названием уже существуют!') : toast.error('Не удалось создать каскадные инструменты!');
    },
    // delete Cascade-Tools
    [deleteContact.fulfilled.type]: (state) => {
      state.deleteContactLoading = false;
      state.deleteContactError = false;
      state.deleteContactSuccess = true;
      message.success("Каскадные инструменты успешно удалены!")
    },
    [deleteContact.pending.type]: (state) => {
      state.deleteContactLoading = true;
    },
    [deleteContact.rejected.type]: (state) => {
      state.deleteContactLoading = false;
      state.deleteContactError = true;
      toast.error('Не удалось удалить каскадные инструменты!');
    },
    // edit part of Cascade-Tools
    [editPartOfContact.fulfilled.type]: (state) => {
      state.editPartOfContactLoading = false;
      state.editPartOfContactError = false;
      state.editPartOfContactSuccess = true;
    },
    [editPartOfContact.pending.type]: (state) => {
      state.editPartOfContactLoading = true;
    },
    [editPartOfContact.rejected.type]: (state, action) => {
      state.editPartOfContactLoading = false;
      state.editPartOfContactError = true;
      action.payload === 409 ? toast.error('Каскадные инструменты с таким названием уже существуют!') : toast.error('Не удалось создать каскадные инструменты!');
    },
  }
});

export const { cleanContact } = ContactSlice.actions;

export default ContactSlice.reducer;