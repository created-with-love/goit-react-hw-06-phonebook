import actionTypes from './contacts-types';

export const addContact = (id, name, phone) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    id,
    name,
    phone,
  },
});

export const deleteContact = id => ({
  type: actionTypes.DELETE_CONTACT,
  payload: {
    id,
  },
});

export const addFilter = text => ({
  type: actionTypes.ADD_FILTER,
  payload: {
    text,
  },
});

export const clearFilter = () => ({
  type: actionTypes.CLEAR_FILTER,
});
