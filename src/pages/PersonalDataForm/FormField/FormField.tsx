import { ChangeEventHandler, FC, MouseEventHandler } from 'react';
import classnames from 'classnames';

import { FormControl } from '../FormControl/FormControl';

import './FormField.scss';
import { userData } from '../../../store/userDataTypes.types';

export type FormFieldProps = {
  id: string;
  stateData: userData;
  onChange: ChangeEventHandler<HTMLInputElement>;
  deleteField?: MouseEventHandler<HTMLButtonElement>;
  horizontal?: boolean;
};

export const FormField: FC<FormFieldProps> = ({
  id,
  stateData,
  onChange,
  deleteField,
  horizontal = false,
}) => {
  const FormFieldClasses = classnames('Form-field', { 'Form-field_horizontal': horizontal });
  return (
    <div className={FormFieldClasses}>
      <FormControl name={`name_${id}`} label="Имя" value={stateData.name} onChange={onChange} />
      <FormControl
        name={`age_${id}`}
        label="Возраст"
        value={stateData.age}
        onChange={onChange}
        inputMode="numeric"
      />
      {deleteField ? (
        <button className="Form-field__button" onClick={deleteField}>
          Удалить
        </button>
      ) : null}
    </div>
  );
};
