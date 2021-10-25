import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		background-color: #8C11BE;
		font-family: 'Raleway', sans-serif;
	}

    a {
        text-decoration: none;
        color: inherit;
		cursor: pointer;
    }
`;

export default GlobalStyle;