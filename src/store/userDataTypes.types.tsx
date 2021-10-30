export type userData = {
  name: string;
  age: string;
};

export type childData = {
  id: string;
  data: userData;
};

export type state = {
  data: userData;
  children: childData[];
};
