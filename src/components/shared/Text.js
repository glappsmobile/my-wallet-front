import styled from 'styled-components';
import spacing from '../../styles/utils/spacing';
import text from '../../styles/utils/text';

const Text = styled.span`
  margin-top: ${({ marginTop }) => spacing(marginTop)};
  padding: ${({ paddingX, paddingY }) => `${spacing(paddingY)} ${spacing(paddingX)}`};
  font-size: 18px;
  line-height: 21px;

  display: inline-block;
  ${({ variant, weight }) => {
    if (variant === 'contrast') {
      return text('primaryDark', 'bold');
    }

    if (variant === 'thin') {
      return text('white', 'thin');
    }

    if (variant === 'pink') {
      return text('pink', weight || 'normal');
    }

    if (variant === 'danger') {
      return text('danger', weight || 'normal');
    }

    return text('white', weight || 'normal');
  }}
`;

export default Text;
