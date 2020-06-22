import { parseISO } from 'date-fns';

export const formatDate = (date) => parseISO(date).toLocaleDateString('pt-BR');

export const formatMoney = (value) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

export const parseOriginWithMock = (origin, mock) => {
  const formated = origin.reduce((newArr, item, index) => newArr.concat({ status: item, position: index }), []);
  const activatedItems = formated.filter((item) => item.status);
  const parsed = activatedItems.map((item) => mock[item.position]);
  return parsed;
};

export const getNames = (origin, mock) => parseOriginWithMock(origin, mock).map((item) => item.name);
