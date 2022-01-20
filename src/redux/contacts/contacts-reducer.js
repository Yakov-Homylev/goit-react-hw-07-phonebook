import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, deleteContact, newFilter } from "./contacts-actions";

const contactsReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filterReducer = createReducer("", {
  [newFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
