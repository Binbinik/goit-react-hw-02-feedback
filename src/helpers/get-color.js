export const getColor = name => {
  switch (name) {
    case 'good':
      return '#3EFA19';

    case 'neutral':
      return '#FAED36';

    case 'bad':
      return '#FA0A36';

    default:
      return '#D8FAFA';
  }
};
