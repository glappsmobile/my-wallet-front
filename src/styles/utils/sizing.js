const sizing = (size) => {
  switch (size) {
    case 'normal':
      return '65px';
    case 'small':
      return '44px';
    default:
      return '50px';
  }
};

export default sizing;
