import { AnyAction } from 'redux';

const INITIAL_STATE = {
  data: { name: '', age: '' },
  children: [],
};

export const userDataReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'SAVE_INPUT_USER_DATA':
      return {
        data: action.userData,
        children: action.childrenData,
      };

    default:
      return state;
  }
};
