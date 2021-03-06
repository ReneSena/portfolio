import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Head from 'next/head';
import theme from '../src/theme';
import Reset from '../src/components/foundation/Reset';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Rene Sena | Portfolio</title>
				<link rel="icon" href="/icon.png" sizes="120x120" />

				<link rel="preconnect" href="https://fonts.gstatic.com" />

				<link
					href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<ThemeProvider theme={theme}>
				<Reset />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

App.defaultProps = {
	Component: '',
	pageProps: '',
};

App.propTypes = {
	// eslint-disable-next-line react/forbid-prop-types
	Component: PropTypes.any,
	// eslint-disable-next-line react/forbid-prop-types
	pageProps: PropTypes.any,
};
