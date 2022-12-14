import { combineReducers, configureStore } from '@reduxjs/toolkit';
//reducers
import ContactSlice from '../features/contact/contactSlice';
import UserSlice from '../features/user/userSlice';

 
// root reducer here
const RootReducer = combineReducers({
  ContactSlice,
  UserSlice
});


// Store config
export const store = configureStore({
  reducer: {RootReducer},
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;