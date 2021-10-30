import { FC } from 'react';

import { Button } from '../../components/Button/Button';
import { ReactComponent as Plus } from '../../assets/imgs/Plus.svg';
import { FormField } from './FormField/FormField';

import './PersonalDataForm.scss';

export const PersonalDataForm: FC = () => {
  return (
    <>
      <h1 className="visually-hidden">Форма персональных данных</h1>
      <form action="#" className="Personal-data-form">
        <div className="Personal-data-form__fieldset">
          <h2 className="subtitle">Персональные данные</h2>
          <FormField id="user" />
        </div>
        <div className="Personal-data-form__fieldset">
          <div className="Personal-data-form__fieldset-header">
            <h2 className="subtitle">Дети (макс. 5)</h2>
            <Button>
              <Plus className="Button__icon" />
              Добавить ребенка
            </Button>
          </div>
          <FormField id="child1" horizontal={true} deleteButton={true} />
          <FormField id="child2" horizontal={true} deleteButton={true} />
        </div>
        <Button filled={true}>Сохранить</Button>
      </form>
    </>
  );
};
