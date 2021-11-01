import { personData, childData } from './userDataTypes.types';

export const saveInputUserData = (
  personData: personData | undefined,
  childrenData: childData[]
) => {
  return {
    type: 'SAVE_INPUT_USER_DATA',
    personData,
    childrenData,
  };
};
