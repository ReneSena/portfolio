import React from 'react';
import Link from 'next/link';
import Card from '../Card';
import CardHighlight from '../Card/Highlight';

import listProjects from './content';
import { ListWrapper } from './styles';

function Projects() {
	return (
		<div>
			{/* <CardHighlight
				url="/cdz.png"
				alt="Quiz dos cavaleiros do zodiáco feito na imersão da nextjs da alura"
				title="Quiz Cavaleiros do Zodíaco"
				description="Quiz realizado durante a imersão Nextjs da Alura, com o tema de cavaleiros do zodíaco, onde esse projeto ficou entre os top 10 dentre as mais de 1500 propostas, sendo premiado com uma bolsa para o Bootcamp JAMSTACK."
			/> */}
			<ListWrapper>
				{listProjects.map((project) => (
					<Card
						as={Link}
						key={project.src}
						href={project.url}
						url={project.src}
						alt={project.alt}
						title={project.title}
						passHref
					/>
				))}
			</ListWrapper>
		</div>
	);
}

export default Projects;
