const colorPicker = (color) => {
  switch (color) {
    case 'primary':
      return '#6d7ce4';
    case 'primaryDark':
      return '#4D65A8';
    case 'primaryLight':
      return '#8C97EA';
    case 'light':
      return '#e5cdb3';
    case 'primaryLighter':
      return 'rgba(224, 209, 237, 0.62)';
    case 'pink':
      return '#e63c80';
    case 'danger':
      return '#df4759';
    case 'gray':
      return '#604848';
    case 'black':
      return '#000000';
    case 'white':
      return '#ffffff';
    default:
      return '#ffffff';
  }
};

export default colorPicker;
