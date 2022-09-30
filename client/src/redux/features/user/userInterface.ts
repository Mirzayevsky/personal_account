import { Iuser } from 'src/interfaces/interface';

//User State
export interface IuserState {
  getAllUserSuccess: boolean,
  getAllUserError: boolean,
  getAllUserLoading: boolean,
  allUsers: Iuser,

  createUserSuccess: boolean,
  createUserError: boolean,
  createUserLoading: boolean,
  createdUser: Iuser,

  getSingleUserSuccess: boolean,
  getSingleUserError: boolean,
  getSingleUserLoading: boolean,
  singleUser: Iuser,

  editUserSuccess: boolean,
  editUserError: boolean,
  editUserLoading: boolean,

  deleteUserSuccess: boolean,
  deleteUserError: boolean,
  deleteUserLoading: boolean,

  editPartOfUserSuccess: boolean,
  editPartOfUserError: boolean,
  editPartOfUserLoading: boolean
};