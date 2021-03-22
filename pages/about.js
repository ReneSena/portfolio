import React from 'react';
import { getRepositoriesServices } from '../src/services/repositories';
import AboutScreen from '../src/components/screens/AboutScreen';
import wesitePageHoc from '../src/templates/Website/hoc';

function AboutPage({ repositories }) {
	return <AboutScreen repositories={repositories} />;
}

AboutPage.propTypes = AboutScreen.propTypes;

export default wesitePageHoc(AboutPage, {
	pagesProps: {
		seoProps: {
			headTitle: 'About me',
		},
	},
});

export async function getStaticProps() {
	const repositories = await getRepositoriesServices('ReneSena').catch(
		(error) => {
			throw new Error(
				`${error} Não foi possível carregar os repositórios, tente novamente`
			);
		}
	);

	return {
		props: { repositories },
	};
}
