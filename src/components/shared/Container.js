import styled from 'styled-components';
import { css } from 'styled-components/macro';
import flexify from '../../styles/utils/flexify';

const Container = styled.div`
  ${({
    theme,
    background = 'inherit',
    flexProps = {},
    marginTop = 'auto',
    paddingX = 'none',
    paddingY = 'none',
    fitContent,
  }) => css`
    ${flexify(flexProps)}
    width:  ${(fitContent ? 'fit-content' : 'calc(100vw)')};
    max-width: 600px;
    min-height: 100vh;
    height: 100vh;
    margin: auto;
    margin-top: ${theme.spacing[marginTop]};
    background: ${theme.color[background]};
    padding: ${`${theme.spacing[paddingY]} ${theme.spacing[paddingX]}`};
    animation: moveInRight 500ms;
  `
}
`;

export default Container;
