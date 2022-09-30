import axios from 'axios';
import { IUserTools,IAttributes} from '../../../interfaces/Iusers';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../../constants/api';

// get all users
export const getAllUser = createAsyncThunk(
  'get-all-user',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUserTools>(`${BASE_URL}/users`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Get all users Error!')
    }
  }
); //not using

// create user
export const createUser = createAsyncThunk(
  'create-user',
  async (formData:IAttributes, thunkAPI) => {
    try {
      const response = await axios.post<IUserTools>(`${BASE_URL}/users`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Create User Error!')
    }
  }
); //200ok


// get single user
export const getSingleUser = createAsyncThunk(
  'get-single-user',
  async (id:string | undefined, thunkAPI) => {
    try {
      const response = await axios.get<IUserTools>(`${BASE_URL}/users/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data;
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Get Single User Error!')
    }
  }
); //200ok


// edit User
export const editUser = createAsyncThunk(
  'edit-user',
  async (formData:IUserTools, thunkAPI) => {
    try {
      const response = await axios.put<IUserTools>(`${BASE_URL}/users/${formData}`, formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Edit User Error!')
    }
  }
); //not using


// delete user
export const deleteUser = createAsyncThunk(
  'delete-user',
  async (id:string, thunkAPI) => {
    try {
      const response = await axios.delete<IUserTools>(`${BASE_URL}/users/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Delete User Error!')
    }
  }
); //200ok


// edit part of user
export const editPartOfUser = createAsyncThunk(
  'edit-part-of-user',
  async (id:string, thunkAPI) => {
    try {
      const response = await axios.put<IUserTools>(`${BASE_URL}/users/${id}`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })
      return response.data; 
    
    } catch (err) {
      return thunkAPI.rejectWithValue('Edit part of User Error!')
    }
  }
); //not using