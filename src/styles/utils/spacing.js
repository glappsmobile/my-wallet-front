const spacing = (space) => {
  switch (space) {
    case 'small':
      return '5px';
    case 'normal':
      return '10px';
    case 'large':
      return '20px';
    case 'huge':
      return '40px';
    case 'auto':
      return 'auto';
    default:
      return '0px';
  }
};

export default spacing;
