import {IContactsTools} from "../../../interfaces/Icontacts";

//Contact State
export interface IContactToolsState {
  getAllContactSuccess: boolean,
  getAllContactError: boolean,
  getAllContactLoading: boolean,
  allContacts: IContactsTools,

  createContactSuccess: boolean,
  createContactError: boolean,
  createContactLoading: boolean,
  createdContact: IContactsTools,

  getSingleContactSuccess: boolean,
  getSingleContactError: boolean,
  getSingleContactLoading: boolean,
  singleContact: IContactsTools,

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