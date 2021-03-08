import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const Container = styled.footer`
	height: 80px;
	padding: 0 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	font-family: 'Open Sans';
	background: #f4f0ff;

	& p {
		margin-right: 12px;
	}

	${breakpointsMedia({
		md: css`
			width: calc(100% - 200px);
			margin: 0 100px;
		`,
	})}
`;

export const ContactWrapper = styled.section`
	width: 100%;
	height: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	background: linear-gradient(180deg, #fff, #c9bbe5);

	& img {
		margin-bottom: 20px;
		width: 100%;
	}

	${breakpointsMedia({
		md: css`
			width: calc(100% - 200px);
			margin: 0 100px;

			& img {
				margin-bottom: 20px;
				width: 500px;
			}
		`,
	})}
`;
