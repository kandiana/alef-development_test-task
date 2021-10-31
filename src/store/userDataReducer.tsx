import { AnyAction } from 'redux';

const MAX_NUMBER_OF_CHILDREN = 5;

export const INITIAL_STATE = {
  personData: { name: '' },
  children: [],
  maxNumberOfChildren: MAX_NUMBER_OF_CHILDREN,
};

export const userDataReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case 'SAVE_INPUT_USER_DATA':
      return {
        ...state,
        personData: action.personData,
        children: action.childrenData,
      };

    default:
      return state;
  }
};
