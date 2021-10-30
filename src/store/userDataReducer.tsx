import { AnyAction } from 'redux';

export const INITIAL_STATE = {
  personData: { name: '' },
  children: [],
};

export const userDataReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'SAVE_INPUT_USER_DATA':
      return {
        personData: action.personData,
        children: action.childrenData,
      };

    default:
      return state;
  }
};
