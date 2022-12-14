import axios from 'axios';
import {IContactsTools,IAttributes} from "../../../interfaces/Icontacts";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/api';

// get all contacts
export const getAllContact = createAsyncThunk(
  'get-all-contact',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IContactsTools>(`${BASE_URL}/contacts`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Get all contacts Error!')
    }
  }
); //not using

// create contact
export const createContact = createAsyncThunk(
  'create-contact',
  async (formData:IAttributes, thunkAPI) => {
    try {
      const response = await axios.post<IContactsTools>(`${BASE_URL}/contacts`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Create Contact Error!')
    }
  }
); //200ok


// get single contact
export const getSingleContact = createAsyncThunk(
  'get-single-contact',
  async (id:string | undefined, thunkAPI) => {
    try {
      const response = await axios.get<IContactsTools>(`${BASE_URL}/contacts/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data;
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Get Single Contact Error!')
    }
  }
); //200ok


// edit contact
export const editContact = createAsyncThunk(
  'edit-contact',
  async (formData:IContactsTools, thunkAPI) => {
    try {
      const response = await axios.put<IContactsTools>(`${BASE_URL}/contacts/${formData}`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Edit Contact Error!')
    }
  }
); //not using


// delete contact
export const deleteContact = createAsyncThunk(
  'delete-contact',
  async (id:string, thunkAPI) => {
    try {
      const response = await axios.delete<IContactsTools>(`${BASE_URL}/contacts/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Delete Contact Error!')
    }
  }
); //200ok


// edit part of contact
export const editPartOfContact = createAsyncThunk(
  'edit-part-of-contact',
  async (id:string, thunkAPI) => {
    try {
      const response = await axios.put<IContactsTools>(`${BASE_URL}/contacts/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Edit part of Contact Error!')
    }
  }
); //not using