import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const WrapperSection = styled.main`
	width: 100%;
	/* max-width: 1000px; */
	margin: auto;
	padding: 40px;

	${breakpointsMedia({
		xs: css`
			padding: 10px;
		`,
	})};
`;

WrapperSection.SectionTitle = styled.h2`
	text-align: center;
	margin-top: 24px;
	margin-bottom: 60px;
	font: ${({ theme }) => theme.typographys.titleXS.font};
	color: ${({ theme }) => theme.colors.secondary};
`;
