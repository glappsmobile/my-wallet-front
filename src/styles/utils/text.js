import { css } from 'styled-components/macro';
import colorPicker from './colorPicker';

const text = (color, weight, size) => css`
  color: ${colorPicker(color)};

  font-weight: ${() => {
    switch (weight) {
      case 'bold':
        return '700';
      case 'thin':
        return '300';
      default:
        return '400';
    }
  }};

  font-size: ${() => {
    switch (size) {
      case 'large':
        return '24px';
      case 'huge':
        return '36px';
      default:
        return (size !== undefined) ? size : '18px';
    }
  }};
`;

export default text;
