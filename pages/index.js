import websitePageHoc from '../src/templates/Website/hoc';
import HomeScreen from '../src/components/screens/HomeScreen';

export default websitePageHoc(HomeScreen, {
	pagesProps: {
		seoProps: {
			headTitle: 'Home',
		},
	},
});
