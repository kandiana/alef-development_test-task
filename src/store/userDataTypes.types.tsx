export type personData = {
  name: string;
  age?: number;
};

export type childData = {
  id: string;
  personData: personData;
};

export type state = {
  personData: personData;
  children: childData[];
  maxNumberOfChildren: 5;
};
