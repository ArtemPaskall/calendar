// eslint-disable-next-line
/// <reference types="react-scripts" />

export type Movie = {
  id: number;
  url: string,
  name: string,
  season: number,
  number: number,
  airdate: string,
  show: {
    image: {
      medium: string;
    }
  }
};
