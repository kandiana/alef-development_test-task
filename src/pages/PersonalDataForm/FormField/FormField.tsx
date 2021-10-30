import { FC } from 'react';
import classnames from 'classnames';

import { FormControl } from '../FormControl/FormControl';

import './FormField.scss';

export type FormFieldProps = {
  id: string;
  horizontal?: boolean;
  deleteButton?: boolean;
};

export const FormField: FC<FormFieldProps> = ({ id, horizontal = false, deleteButton = false }) => {
  const FormFieldClasses = classnames('Form-field', { 'Form-field_horizontal': horizontal });
  return (
    <div className={FormFieldClasses}>
      <FormControl name={`name_${id}`} label="Имя" />
      <FormControl name={`age_${id}`} label="Возраст" />
      {deleteButton ? <button className="Form-field__button">Удалить</button> : null}
    </div>
  );
};
