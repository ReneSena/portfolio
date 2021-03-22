/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import WebsitePage from '..';
import GlobalThemeProvider from '../GlobalThemeProvider';

function websitePageHoc(PageComponent, { pagesProps } = { pagesProps: {} }) {
	return (props) => (
		<GlobalThemeProvider>
			<WebsitePage {...pagesProps} {...props.pagesProps}>
				<PageComponent {...props} />
			</WebsitePage>
		</GlobalThemeProvider>
	);
}

export default websitePageHoc;
