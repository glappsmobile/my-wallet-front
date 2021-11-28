import styled from 'styled-components';
import flexify from '../../styles/utils/flexify';
import spacing from '../../styles/utils/spacing';
import colorPicker from '../../styles/utils/colorPicker';

const Group = styled.div`
  ${({ flexProps }) => (flexProps ? flexify(flexProps) : flexify())}
  background: ${({ background }) => (background ? colorPicker(background) : 'transparent')};
  margin-top: ${({ marginTop }) => spacing(marginTop)};
  margin-bottom: ${({ marginBottom }) => spacing(marginBottom)};
  padding: ${({ paddingX, paddingY }) => `${spacing(paddingY)} ${spacing(paddingX)}`};
  border-radius: 5px;
  width: 100%;
`;

export default Group;
