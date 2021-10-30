import { userData, childData } from './userDataTypes.types';

export const saveInputUserData = (userData: userData, childrenData: childData[]) => {
  return {
    type: 'SAVE_INPUT_USER_DATA',
    userData,
    childrenData,
  };
};
