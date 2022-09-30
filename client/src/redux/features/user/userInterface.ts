import { IUserTools } from 'src/interfaces/Iusers';

//User State
export interface IuserState {
  getAllUserSuccess: boolean,
  getAllUserError: boolean,
  getAllUserLoading: boolean,
  allUsers: IUserTools,

  createUserSuccess: boolean,
  createUserError: boolean,
  createUserLoading: boolean,
  createdUser: IUserTools,

  getSingleUserSuccess: boolean,
  getSingleUserError: boolean,
  getSingleUserLoading: boolean,
  singleUser:IUserTools,

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