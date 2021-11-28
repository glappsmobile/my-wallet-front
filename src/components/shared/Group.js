import styled from 'styled-components';
import { css } from 'styled-components/macro';
import flexify from '../../styles/utils/flexify';

const Group = styled.div`
${({
    theme,
    background = 'primary',
    flexProps = {},
    marginTop = 'auto',
    marginBottom = 'auto',
    paddingX = 'none',
    paddingY = 'none',
  }) => css`
    ${flexify(flexProps)}
    background: ${theme.color[background]};
    margin-top: ${theme.spacing[marginTop]};
    margin-bottom: ${theme.spacing[marginBottom]};
    padding: ${`${theme.spacing[paddingY]} ${theme.spacing[paddingX]}`};
    border-radius: 5px;
    width: 100%;
  `
}
`;

export default Group;
