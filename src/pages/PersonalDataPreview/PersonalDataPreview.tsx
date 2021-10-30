import { FC } from 'react';
import { useSelector } from 'react-redux';

import { state, personData } from '../../store/userDataTypes.types';

import { Subtitle } from '../../components/Subtitle/Subtitle';

import './PersonalDataPreview.scss';

const NAME_SEPARATORS = [' ', '-', "'"];

export const PersonalDataPreview: FC = () => {
  const { personData, children } = useSelector((state: state) => state);

  const formatAge = (age: number) => {
    if ((age > 4 && age < 20) || age % 10 === 0 || age % 10 > 4) {
      return `${age} лет`;
    }

    if (age % 10 === 1) {
      return `${age} год`;
    }

    return `${age} года`;
  };

  const formatName = (name: string) => {
    let formattedName = name.toLowerCase();

    NAME_SEPARATORS.forEach((separator) => {
      formattedName = formattedName
        .split(separator)
        .map((namePart) => namePart[0].toUpperCase() + namePart.substring(1))
        .join(separator);
    });

    return formattedName;
  };

  const formatPersonData = (data: personData) => {
    if (data.name !== '' && data.age) {
      return `${formatName(data.name)}, ${formatAge(data.age)}`;
    }

    if (data.age) {
      return `${formatAge(data.age)} (имя не указано)`;
    }

    if (data.name !== '') {
      return formatName(data.name);
    }

    return 'Нет данных';
  };

  return (
    <div className="Personal-data-preview">
      <h1 className="visually-hidden">Превью персональных данных</h1>
      <div className="Personal-data-preview__block">
        <Subtitle text="Персональные данные" />
        <p className="Personal-data-preview__text">{formatPersonData(personData)}</p>
      </div>
      <div className="Personal-data-preview__block">
        <Subtitle text="Дети" />
        {children.length === 0 ? (
          <p className="Personal-data-preview__text">Нет данных</p>
        ) : (
          children.map((childData) => (
            <p
              key={childData.id}
              className="Personal-data-preview__text Personal-data-preview__text_button-like"
            >
              {formatPersonData(childData.personData)}
            </p>
          ))
        )}
      </div>
    </div>
  );
};
