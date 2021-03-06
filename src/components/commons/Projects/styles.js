import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const ListWrapper = styled.ul`
	display: grid;
	grid-template-columns: 1fr;

	${breakpointsMedia({
		md: css`
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			margin: 30px;
		`,
		xl: css`
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			margin: 30px;
		`,
	})}

	& a {
		margin-bottom: 30px;

		${breakpointsMedia({
			md: css`
				margin: 30px;
			`,
		})}
	}
`;
