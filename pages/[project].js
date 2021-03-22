import React from 'react';
import websitePageHoc from '../src/templates/Website/hoc';
import ProjectScreen from '../src/components/screens/ProjectScreen';
import {
	getRepositoriesServices,
	getRepositoryServices,
} from '../src/services/repositories';

function Projects({ repositoryInfo }) {
	const { name, url, description } = repositoryInfo;

	return (
		<div>
			<ul>
				<li>Name: {name}</li>
				<li>Url: {url}</li>
				<li>Description: {description}</li>
			</ul>
		</div>
	);
}

Projects.propTypes = ProjectScreen.propTypes;

export default websitePageHoc(Projects);

export async function getStaticPaths() {
	const repositories = await getRepositoriesServices('ReneSena');

	const paths = repositories.map((repos) => ({
		params: {
			project: repos.name,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const project = await getRepositoryServices(
		'ReneSena',
		`${params.project}`
	);

	const repositoryInfo = {
		name: project.name,
		description: project.description,
		url: project.html_url,
	};

	return {
		props: { repositoryInfo },
	};
}
