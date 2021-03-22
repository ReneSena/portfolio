import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../commons/Link';

import { AboutSection, RepositoriesSection } from './styles';

function AboutScreen({ repositories }) {
	return (
		<>
			<AboutSection>
				<img
					src="https://avatars.githubusercontent.com/u/36897083?s=460&u=f1b8e17fb00e6d7bf8482e20f2d7efa442a2433e&v=4"
					alt="Fotografia de Rene Sena, criador do portfolio."
				/>
				<article>
					<p>
						Me chamo Rene Sena. Atualmente, trabalho como
						Desenvolvedor Front-end na Docket Brasil. Iniciei na
						área efetivamente em 2018, após a conclusão da graduação
						em Análise e Desenvolvimento de Sistemas pela
						Universidade de Mogi das Cruzes. Antes do meu inicio, eu
						trabalhei por 5 anos na área Logística e Administrativa,
						e não, eu não pensava em seguir em algumas dessa áreas.
						Arquitetura e Tecnologia sempre foram os meus
						queridinhos, foi então que cursei Edificações pela ETEC
						e foi um experiência incrível.
					</p>
					<p>
						Porém, em um dado momento, precisei escolher qual
						caminho seguir, e foi uma decisão difícil a princípio,
						porém importante e que mudou minha vida. O fato de
						conseguir entregar valor para as pessoas/empresas, levar
						experiências que ajudem elas a resolverem seus problemas
						e ver o impacto direto causado em suas rotinas com
						soluções tecnológicas, foi o que me ganhou, e
						inevitavelmente foi o gatilho pra essa decisão.
					</p>
					<p>
						A web sempre foi fascinante, e se aventurar dentro do
						seu mundo, me revelou novas formas de pensar e ver
						perspectivas que eu jamais imaginei que existiam. Eu sou
						uma pessoa muita curiosa, e gosto de entender os
						processos que permeam a criação de uma ideia. Por buscar
						compreender como as coisas funcionam, acabo me
						aventurando e me desafiando em busca dessas respostas e
						isso me da insumo pra estar sempre evoluindo. Gosto de
						aprender coisas novas e compartilhar aquilo que aprendo
						com as pessoas, acredito que essa é uma forma de fixar
						os conhecimentos adquiridos, e tornar essa troca de
						informação rica para ambos, e isso me levou a criação
						desse blog.
					</p>
					<p>
						Eu amo trabalhar em equipe, acredito que a contribuição
						de todos, leva o time, à chegar nas melhores respostas e
						consequentemente nos melhores resultados.
					</p>
					<p>
						Gosto muito de trocar figurinhas sobre tecnologias,
						desenvolvimento pessoal, culinária, finanças, esportes
						radicais e tudo que for interessante. Bora comigo nessa
						jornada?!
					</p>
				</article>
			</AboutSection>
			<RepositoriesSection>
				<h2>Meus Repositórios</h2>
				<RepositoriesSection.List>
					{repositories &&
						repositories.map((repo) => (
							<li key={repo.id}>
								<h2>{repo.name}:</h2>{' '}
								<Link href={repo.name}>
									Ver mais: {repo.name}
								</Link>
							</li>
						))}
				</RepositoriesSection.List>
			</RepositoriesSection>
		</>
	);
}

AboutScreen.propTypes = {
	repositories: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

export default AboutScreen;
