import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const AboutSection = styled.section`
	width: 100%;
	padding: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	flex: 1;
	background-color: #f5f5f5;

	${breakpointsMedia({
		md: css`
			flex-direction: row;
			padding: 20px 40px;
			height: calc(100vh - 100px);
		`,
	})}

	& img {
		border-radius: 50%;
		margin-bottom: 20px;
		width: 150px;
		height: 150px;

		${breakpointsMedia({
			md: css`
				width: 300px;
				height: 300px;
				margin-right: 20px;
			`,
		})}
	}

	& p {
		margin-bottom: 20px;
		text-align: left;
	}
`;

export const RepositoriesSection = styled.section`
	margin: auto;
	display: flex;
	padding: 20px;

	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	${breakpointsMedia({
		md: css`
			height: 100vh;
		`,
	})}

	& h2 {
		margin-bottom: 20px;
	}
`;

RepositoriesSection.List = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	gap: 15px;

	${breakpointsMedia({
		md: css`
			grid-template-columns: repeat(5, 1fr);
		`,
	})}

	& li {
		width: 300px;
		height: 250px;
		padding: 20px;
		background-color: #f4f0ff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		& h2 {
			font-family: 'Open Sans', sans-serif;
			font-size: 18px;
		}
	}
`;
