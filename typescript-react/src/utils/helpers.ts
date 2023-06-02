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
