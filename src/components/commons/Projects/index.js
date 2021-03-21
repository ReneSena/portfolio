import React from 'react';
import Link from 'next/link';
import Card from '../Card';

import listProjects from './content';
import { ListWrapper } from './styles';

function Projects() {
	return (
		<div>
			<ListWrapper>
				{listProjects.map((project) => (
					<Card
						as={Link}
						key={project.src}
						href={project.url}
						url={project.src}
						alt={project.alt}
						title={project.title}
						author={project.author}
						passHref
					/>
				))}
			</ListWrapper>
		</div>
	);
}

export default Projects;
