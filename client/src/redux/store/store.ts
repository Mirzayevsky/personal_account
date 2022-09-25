import { combineReducers, configureStore } from '@reduxjs/toolkit';
//reducers
import ContactSlice from '../features/contact/contactSlice';


// root reducer here
const RootReducer = combineReducers({
  ContactSlice,
});


// Store config
export const store = configureStore({
  reducer: {RootReducer},
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;