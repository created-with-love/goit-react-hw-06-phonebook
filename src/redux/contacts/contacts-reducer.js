import { combineReducers } from 'redux';

import actionTypes from './contacts-types';

function itemsReducer(state = [], { type, payload }) {
  switch (type) {
    case actionTypes.ADD_CONTACT:
      return [payload, ...state];

    case actionTypes.DELETE_CONTACT:
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
}

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case actionTypes.ADD_FILTER:
      return payload.text;

    case actionTypes.CLEAR_FILTER:
      return '';

    default:
      return state;
  }
}

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
