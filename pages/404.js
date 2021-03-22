import websitePageHoc from '../src/templates/Website/hoc';
import Page404Screen from '../src/components/screens/Page404Screen';

export default websitePageHoc(Page404Screen, {
	pagesProps: {
		seoProps: {
			headTitle: 'Page 404 - Not found',
		},
		header: {
			visible: false,
		},
		footer: {
			visible: false,
		},
	},
});
