import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUserTools } from '../../../interfaces/Iusers'; //interfaces
import { IuserState } from './userInterface';
import { toast } from 'react-toastify';
import { message } from 'antd';

import {
  getAllUser,
  createUser,
  getSingleUser,
  editUser,
  deleteUser,
  editPartOfUser
} from './userAction'; //action

//initial state of reducer
const initialState: IuserState = {
  getAllUserSuccess: false,
  getAllUserLoading: false,
  getAllUserError: false,
  allUsers: {},

  createUserSuccess: false,
  createUserLoading: false, 
  createUserError: false,
  createdUser: {},

  getSingleUserSuccess: false,
  getSingleUserLoading: false,
  getSingleUserError: false,
  singleUser: {},

  editUserSuccess: false,
  editUserLoading: false,
  editUserError: false,

  deleteUserSuccess: false,
  deleteUserLoading: false,
  deleteUserError: false,

  editPartOfUserSuccess: false,
  editPartOfUserLoading: false,
  editPartOfUserError: false
};

const UserSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    cleanUser: (state) => {
      state.createUserSuccess = false;
      state.createUserLoading = false;
      state.createUserError = false;
      // @ts-ignore
      state.createdUser = {};

      state.editUserSuccess = false;
      state.editUserLoading = false;
      state.editUserError = false;

      state.deleteUserSuccess = false;
      state.deleteUserLoading = false;
      state.deleteUserError = false;

      state.editPartOfUserSuccess = false;
      state.editPartOfUserLoading = false;
      state.editPartOfUserError = false;

      state.getSingleUserLoading = false;
      state.getSingleUserError = false;
      state.getSingleUserSuccess = false;
      state.singleUser = {};
    },
  },
  extraReducers: {
    // get all Users
    [getAllUser.fulfilled.type]: (state, action: PayloadAction<IUserTools>) => {
      state.getAllUserLoading = false;
      state.getAllUserError = false;
      state.allUsers = action.payload;
      state.getAllUserSuccess = true;
    },
    [getAllUser.pending.type]: (state) => {
      state.getAllUserLoading = true;
    },
    [getAllUser.rejected.type]: (state) => {
      state.getAllUserLoading = false;
      state.getAllUserError = true;
      toast.error('Не удалось получить каскадные инструменты!');
    },
    // create Cascade-Tools
    [createUser.fulfilled.type]: (state, action: PayloadAction<IUserTools>) => {
      state.createUserLoading = false;
      state.createUserError = false;
      state.createUserSuccess = true;
      state.createdUser = action.payload;
      state.deleteUserSuccess = false;
      toast.success('Каскадные инструменты созданные успешно!');
    },
    [createUser.pending.type]: (state) => {
      state.createUserLoading = true;
    },
    [createUser.rejected.type]: (state, action) => {
      state.createUserLoading = false;
      state.createUserError = true;
      action.payload === 409 ? toast.error('Каскадные инструменты с таким названием уже существуют!') : toast.error('Не удалось создать каскадные инструменты!');
    },
    // get single Cascade-Tools
    [getSingleUser.fulfilled.type]: (state, action: PayloadAction<IUserTools>) => {
      state.getSingleUserLoading = false;
      state.getSingleUserError = false;
      state.singleUser = action.payload;
      state.getSingleUserSuccess = true;
    },
    [getSingleUser.pending.type]: (state) => {
      state.getSingleUserLoading = true;
    },
    [getSingleUser.rejected.type]: (state) => {
      state.getSingleUserLoading = false;
      state.getSingleUserError = true;
      toast.error('Не удалось получить этот каскадные инструменты!');
    },
    // edit Cascade-Tools
    [editUser.fulfilled.type]: (state) => {
      state.editUserLoading = false;
      state.editUserError = false;
      state.editUserSuccess = true;
      toast.success('Каскадные инструменты успешно изменены!');
    },
    [editUser.pending.type]: (state) => {
      state.editUserLoading = true;
    },
    [editUser.rejected.type]: (state, action) => {
      state.editUserLoading = false;
      state.editUserError = true;
      action.payload === 409 ? toast.error('Каскадные инструменты с таким названием уже существуют!') : toast.error('Не удалось создать каскадные инструменты!');
    },
    // delete Cascade-Tools
    [deleteUser.fulfilled.type]: (state) => {
      state.deleteUserLoading = false;
      state.deleteUserError = false;
      state.deleteUserSuccess = true;
      message.success("Каскадные инструменты успешно удалены!")
    },
    [deleteUser.pending.type]: (state) => {
      state.deleteUserLoading = true;
    },
    [deleteUser.rejected.type]: (state) => {
      state.deleteUserLoading = false;
      state.deleteUserError = true;
      toast.error('Не удалось удалить каскадные инструменты!');
    },
    // edit part of Cascade-Tools
    [editPartOfUser.fulfilled.type]: (state) => {
      state.editPartOfUserLoading = false;
      state.editPartOfUserError = false;
      state.editPartOfUserSuccess = true;
    },
    [editPartOfUser.pending.type]: (state) => {
      state.editPartOfUserLoading = true;
    },
    [editPartOfUser.rejected.type]: (state, action) => {
      state.editPartOfUserLoading = false;
      state.editPartOfUserError = true;
      action.payload === 409 ? toast.error('Каскадные инструменты с таким названием уже существуют!') : toast.error('Не удалось создать каскадные инструменты!');
    },
  }
});

export const { cleanUser } = UserSlice.actions;

export default UserSlice.reducer;