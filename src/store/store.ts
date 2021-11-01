import { createStore } from 'redux';

import { userDataReducer } from './userDataReducer';

let persistedUserData;
const localStorageUserData = localStorage.getItem('userData');

if (localStorageUserData) {
  persistedUserData = JSON.parse(localStorageUserData);
}

export const store = createStore(userDataReducer, persistedUserData);

store.subscribe(() => {
  localStorage.setItem('userData', JSON.stringify(store.getState()));
});
