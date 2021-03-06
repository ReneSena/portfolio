import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const WrapperSection = styled.main`
	width: 100%;
	margin-top: 100px;
	padding: 20px;
	border-radius: 20px;
	background-image: linear-gradient(180deg, #c9bbe5, #fff);

	${breakpointsMedia({
		md: css`
			padding: 40px;
		`,
	})};

	${breakpointsMedia({
		md: css`
			width: calc(100% - 200px);
			margin: 100px 100px 0 100px;
			text-align: left;
		`,
	})}
`;

WrapperSection.SectionTitle = styled.h2`
	text-align: left;
	font-family: 'Open Sans', sans-serif;
	font-size: 24px;
	font-weight: 700;
	color: #333;
	display: flex;
	align-items: center;
	margin: 0 0 40px 0;

	&::before {
		content: '';
		width: 20px;
		height: 20px;
		display: block;
		background-color: #6535cc;
		border-radius: 50%;
		margin-right: 30px;
	}
`;
