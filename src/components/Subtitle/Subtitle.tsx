import { FC } from 'react';

import './Subtitle.scss';

export type SubtitleProps = {
  text: string;
};

export const Subtitle: FC<SubtitleProps> = ({ text }) => {
  return <h2 className="Subtitle">{text}</h2>;
};
