import styled from 'styled-components';
import spacing from '../../styles/utils/spacing';

const Form = styled.form`
  width: 100%;
  display: grid;
  row-gap: 10px;
  margin-top: ${({ marginTop }) => spacing(marginTop)};
  margin-bottom: ${({ marginBottom }) => spacing(marginBottom)};
`;
export default Form;
