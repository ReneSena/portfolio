import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const ListWrapper = styled.ul`
	display: grid;
	gap: 30px;
	grid-template-columns: 1fr;

	${breakpointsMedia({
		md: css`
			display: grid;
			grid-template-columns: repeat(2, 1fr);
		`,
		xl: css`
			display: grid;
			grid-template-columns: repeat(3, 1fr);
		`,
	})}
`;
