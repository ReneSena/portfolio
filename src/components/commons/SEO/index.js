import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export function SEO({ headTitle }) {
	const hasHeadTitle = Boolean(headTitle);
	const pageTitleDefault = 'Rene Sena - My Portfolio';
	const description = 'Rene Sena - My portfolio about me';
	const imageUrl =
		'https://github.com/ReneSena/ReneSena/blob/master/background_profile.png';

	const title = hasHeadTitle
		? `${headTitle} | ${pageTitleDefault}`
		: pageTitleDefault;

	return (
		<Head>
			<title>{title}</title>
			<meta name="title" content={title} />
			<meta name="description" content={description} />

			{/* <!-- Open Graph / Facebook --> */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://metatags.io/" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={imageUrl} />

			{/* <!-- Twitter --> */}
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://metatags.io/" />
			<meta property="twitter:title" content={title} />
			<meta property="twitter:description" content={description} />
			<meta property="twitter:image" content={imageUrl} />
		</Head>
	);
}

SEO.defaultProps = {
	headTitle: '',
};

SEO.propTypes = {
	headTitle: PropTypes.string,
};
