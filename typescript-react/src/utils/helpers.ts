import { initialState } from '@/reducers/formReducer';
import { FormState } from '@/types/FormTypes';

export const convertTimestampToDate = (timestamp: string = ''): string => {
  const date: Date = new Date(timestamp);

  const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const formattedDate: string = dateFormatter.format(date);

  return formattedDate;
};

export const getTargetNameAndValue = (
  target: EventTarget & (HTMLInputElement | HTMLSelectElement),
) => {
  const { name, value } = target;

  const fieldType = typeof initialState[name as keyof FormState];

  let parsedValue: string | number = value;

  if (fieldType === 'number') {
    parsedValue = parseInt(value);
  }

  return { name, value: parsedValue };
};
