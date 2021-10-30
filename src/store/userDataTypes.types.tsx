export type userData = {
  name: string;
  age?: number;
};

export type childData = {
  id: string;
  data: userData;
};

export type state = {
  data: userData;
  children: childData[];
};
