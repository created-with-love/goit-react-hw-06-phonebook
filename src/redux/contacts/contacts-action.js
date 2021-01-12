import actionTypes from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction(actionTypes.ADD_CONTACT, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction(actionTypes.DELETE_CONTACT);
const addFilter = createAction(actionTypes.ADD_FILTER);

export default { addContact, deleteContact, addFilter };
// export const addContact = (id, name, phone) => ({
//   type: actionTypes.ADD_CONTACT,
//   payload: {
//     id,
//     name,
//     phone,
//   },
// });

// export const deleteContact = (id) => ({
//   type: actionTypes.DELETE_CONTACT,
//   payload: {
//     id,
//   },
// });

// export const addFilter = (text) => ({
//   type: actionTypes.ADD_FILTER,
//   payload: {
//     text,
//   },
// });
