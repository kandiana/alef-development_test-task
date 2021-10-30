import React, { FC, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { customAlphabet } from 'nanoid';

import { state } from '../../store/userDataTypes.types';
import { saveInputUserData } from '../../store/userDataAction';

import { Button } from '../../components/Button/Button';
import { ReactComponent as Plus } from '../../assets/imgs/Plus.svg';
import { FormField } from './FormField/FormField';

import './PersonalDataForm.scss';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

const MAX_NUMBER_OF_CHILDREN = 5;

export const PersonalDataForm: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userData, setUserData] = useState(useSelector((state: state) => state.data));
  const [childrenData, setChildrenData] = useState(useSelector((state: state) => state.children));

  const handleUserDataInput = useCallback((event) => {
    const { target } = event;
    const key = target.name.split('_')[0];

    setUserData((prev) => ({
      ...prev,
      [key]: target.value,
    }));
  }, []);

  const addChildDataField = useCallback((event) => {
    event.preventDefault();

    setChildrenData((prev) => [
      ...prev,
      {
        id: nanoid(),
        data: { name: '', age: '' },
      },
    ]);
  }, []);

  const removeChildDataField = useCallback((id) => {
    return (event: React.FormEvent<HTMLButtonElement>) => {
      event.preventDefault();

      setChildrenData((prev) => prev.filter((childData) => childData.id !== id));
    };
  }, []);

  const handleChildDataInput = useCallback((event) => {
    const { target } = event;
    const [key, id] = target.name.split('_');

    setChildrenData((prev) =>
      prev.map((childData) =>
        childData.id === id ? { id, data: { ...childData.data, [key]: target.value } } : childData
      )
    );
  }, []);

  const saveFormData = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(saveInputUserData(userData, childrenData));

    history.push('/preview');
  };

  return (
    <>
      <h1 className="visually-hidden">Форма персональных данных</h1>
      <form action="#" className="Personal-data-form" onSubmit={saveFormData}>
        <div className="Personal-data-form__fieldset">
          <h2 className="subtitle">Персональные данные</h2>
          <FormField id="user" stateData={userData} onChange={handleUserDataInput} />
        </div>
        <div className="Personal-data-form__fieldset">
          <div className="Personal-data-form__fieldset-header">
            <h2 className="subtitle">Дети (макс. 5)</h2>
            {childrenData.length === MAX_NUMBER_OF_CHILDREN ? null : (
              <Button onClick={addChildDataField}>
                <Plus className="Button__icon" />
                Добавить ребенка
              </Button>
            )}
          </div>
          {childrenData.map((childData) => (
            <FormField
              key={childData.id}
              id={childData.id}
              stateData={childData.data}
              onChange={handleChildDataInput}
              deleteField={removeChildDataField(childData.id)}
              horizontal={true}
            />
          ))}
        </div>
        <Button filled={true}>Сохранить</Button>
      </form>
    </>
  );
};
