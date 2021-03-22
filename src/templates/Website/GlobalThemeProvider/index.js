import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import theme from '../../../theme';
import Reset from '../../../components/foundation/Reset';

function GlobalThemeProvider({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<Reset />
			{children}
		</ThemeProvider>
	);
}

GlobalThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default GlobalThemeProvider;
