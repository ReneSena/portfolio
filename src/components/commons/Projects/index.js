import React from "react";
import Card from "../Card";
import CardHighlight from "../Card/Highlight";

import listProjects from "./content";

function Projects() {
	return (
		<div>
			<CardHighlight
				url="/cdz.png"
				alt="nakjsd"
				title="Quiz Cavaleiros do Zodíaco"
				description="Quiz realizado durante a imersão Nextjs da Alura, com o tema de cavaleiros do zodíaco, onde esse projeto ficou entre os top 10 dentre as mais de 1500 propostas, sendo premiado com uma bolsa para o Bootcamp JAMSTACK."
			/>
			<ul
				style={{
					display: "flex",
					alignContent: "center",
					justifyContent: "space-between",

					flexWrap: "wrap",
					gap: "24px",
				}}
			>
				{listProjects.map((project) => (
					<Card
						key={project.src}
						url={project.src}
						alt={project.alt}
						title={project.title}
					/>
				))}
			</ul>
		</div>
	);
}

export default Projects;
