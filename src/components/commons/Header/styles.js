import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const Container = styled.header`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;

	${breakpointsMedia({
		md: css`
			padding: 10px 40px;
			flex-direction: row;
		`,
	})}
`;
