import { Icontacts } from 'src/interfaces/interface';

//Contact State
export interface IContactState {
  getAllContactSuccess: boolean,
  getAllContactError: boolean,
  getAllContactLoading: boolean,
  allContacts: Icontacts,

  createContactSuccess: boolean,
  createContactError: boolean,
  createContactLoading: boolean,
  createdContact: Icontacts,

  getSingleContactSuccess: boolean,
  getSingleContactError: boolean,
  getSingleContactLoading: boolean,
  singleContact: Icontacts,

  editContactSuccess: boolean,
  editContactError: boolean,
  editContactLoading: boolean,

  deleteContactSuccess: boolean,
  deleteContactError: boolean,
  deleteContactLoading: boolean,

  editPartOfContactSuccess: boolean,
  editPartOfContactError: boolean,
  editPartOfContactLoading: boolean
};