import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

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
			<Component {...pageProps} />
		</>
	);
}

App.propTypes = {
	Component: PropTypes.oneOfType([
		PropTypes.elementType,
		PropTypes.node,
		PropTypes.func,
		PropTypes.object,
	]).isRequired,
	pageProps: PropTypes.oneOfType([
		PropTypes.elementType,
		PropTypes.node,
		PropTypes.func,
		PropTypes.object,
	]).isRequired,
};
