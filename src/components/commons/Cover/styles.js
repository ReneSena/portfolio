import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const CoverWrapper = styled.section`
	background-color: #f4f0ff;
	position: relative;
	display: flex;
	flex: 1;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	z-index: 10;
	padding: 20px;
	text-align: center;

	${breakpointsMedia({
		md: css`
			width: 100%;
			height: calc(100vh - 100px);
			text-align: left;
		`,
	})}
`;

CoverWrapper.Avatar = styled.img`
	object-fit: cover;
	max-width: 100%;
	margin-bottom: 24px;

	${breakpointsMedia({
		md: css`
			width: 100%;
			max-width: 450px;
			margin-bottom: 0;
		`,
	})}
`;

CoverWrapper.Title = styled.h1`
	color: #444;
	font-size: 40px;
	font-family: 'Open Sans', sans-serif;
	width: 450px;
	text-shadow: 10px 10px 4px rgba(0, 0, 0, 0.2);
	font-style: italic;
	font-variant: small-caps;
	margin: 0;

	${breakpointsMedia({
		md: css`
			font-size: 60px;
		`,
	})}
`;

CoverWrapper.Footer = styled.footer`
	color: #444;
	font-size: 16px;
	font-family: 'Open Sans', sans-serif;
	font-weight: 700;
	display: flex;
	align-items: center;
	position: absolute;
	bottom: 20px;

	& p {
		margin-right: 30px;
	}

	${breakpointsMedia({
		md: css`
			position: absolute;
			right: 100px;
			bottom: 50px;
		`,
	})}
`;
