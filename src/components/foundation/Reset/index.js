import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`

	* {
		box-sizing: border-box;
		text-decoration: none;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	${normalize}

	html,
	body {
		margin: 0;
		padding: 0;
		display: flex;
		width: 100%;
		min-height: 100vh;
		font-family: 'Lato', sans-serif;
	}

	#__next {
		width: 100%;
	}
`;

export default GlobalStyle;
