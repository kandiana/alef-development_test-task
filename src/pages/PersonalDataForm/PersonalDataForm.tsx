import React, { FC, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { customAlphabet } from 'nanoid';

import { state } from '../../store/userDataTypes.types';
import { saveInputUserData } from '../../store/userDataAction';

import { FormField } from './FormField/FormField';
import { Subtitle } from '../../components/Subtitle/Subtitle';
import { Button } from '../../components/Button/Button';
import { ReactComponent as Plus } from '../../assets/imgs/Plus.svg';

import './PersonalDataForm.scss';

const nanoid = customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', 10);

export const PersonalDataForm: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const state = useSelector((state: state) => state);

  const [personData, setPersonData] = useState(state.personData);
  const [childrenData, setChildrenData] = useState(state.children);
  const maxNumberOfChildren = state.maxNumberOfChildren;

  const handleUserDataInput = useCallback((event) => {
    const { target } = event;
    const key = target.name.split('_')[0];

    setPersonData((prev) => ({
      ...prev,
      [key]:
        target.inputMode === 'numeric'
          ? target.value
            ? Number(target.value)
            : undefined
          : target.value,
    }));
  }, []);

  const addChildDataField = useCallback((event) => {
    event.preventDefault();

    setChildrenData((prev) => [
      ...prev,
      {
        id: nanoid(),
        personData: { name: '' },
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
        childData.id === id
          ? {
              id,
              personData: {
                ...childData.personData,
                [key]:
                  target.inputMode === 'numeric'
                    ? target.value
                      ? Number(target.value)
                      : undefined
                    : target.value,
              },
            }
          : childData
      )
    );
  }, []);

  const saveFormData = (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(
      saveInputUserData(
        personData,
        childrenData.filter(
          (childData) => childData.personData.name !== '' || childData.personData.age
        )
      )
    );

    history.push('/preview');
  };

  return (
    <form action="#" className="Personal-data-form" onSubmit={saveFormData}>
      <h1 className="visually-hidden">Форма персональных данных</h1>
      <div className="Personal-data-form__fieldsets">
        <div className="Personal-data-form__fieldset">
          <Subtitle text="Персональные данные" />
          <FormField id="user" personData={personData} onChange={handleUserDataInput} />
        </div>
        <div className="Personal-data-form__fieldset">
          <div className="Personal-data-form__fieldset-header">
            <Subtitle text="Дети (макс. 5)" />
            {childrenData.length === maxNumberOfChildren ? null : (
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
              personData={childData.personData}
              onChange={handleChildDataInput}
              deleteField={removeChildDataField(childData.id)}
              horizontal={true}
            />
          ))}
        </div>
      </div>
      <Button filled={true}>Сохранить</Button>
    </form>
  );
};
