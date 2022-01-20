import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addContact = createAction("contacts/add", (name, number) => {
  return {
    payload: { name, number, id: nanoid() },
  };
});

export const deleteContact = createAction("contacts/delete");

export const newFilter = createAction("contacts/filter");
