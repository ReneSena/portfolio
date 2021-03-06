import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const Container = styled.footer`
	height: 80px;
	padding: 0 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	margin-top: 40px;
	font-family: 'Open Sans';
	background: #f4f0ff;
	border-radius: 10px;

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
