import React, { FC, useCallback, useState } from 'react';
import { customAlphabet } from 'nanoid';

import { Button } from '../../components/Button/Button';
import { ReactComponent as Plus } from '../../assets/imgs/Plus.svg';
import { FormField } from './FormField/FormField';

import './PersonalDataForm.scss';

export type userData = {
  name: string;
  age: string;
};

export type childData = {
  id: string;
  data: userData;
};

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

const INITIAL_USER_DATA: userData = {
  name: '',
  age: '',
};

const INITIAL_CHILDREN_DATA: childData[] = [];

export const PersonalDataForm: FC = () => {
  const [userData, setUserData] = useState(INITIAL_USER_DATA);
  const [childrenData, setChildrenData] = useState(INITIAL_CHILDREN_DATA);

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
      prev.map((childData) => {
        console.log(id);
        return childData.id === id
          ? { ...childData, data: { ...childData.data, [key]: target.value } }
          : childData;
      })
    );
  }, []);

  return (
    <>
      <h1 className="visually-hidden">Форма персональных данных</h1>
      <form action="#" className="Personal-data-form">
        <div className="Personal-data-form__fieldset">
          <h2 className="subtitle">Персональные данные</h2>
          <FormField id="user" stateData={userData} onChange={handleUserDataInput} />
        </div>
        <div className="Personal-data-form__fieldset">
          <div className="Personal-data-form__fieldset-header">
            <h2 className="subtitle">Дети (макс. 5)</h2>
            {childrenData.length === 5 ? null : (
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
