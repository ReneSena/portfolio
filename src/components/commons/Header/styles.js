import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const Container = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	transition: background 500ms linear;
	background-color: #fff;
	color: white;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 100;

	${(props) => {
		if (props.isInitial) {
			return css`
				background-color: rgba(255, 255, 255, 0.3);
				backdrop-filter: blur(200px);
			`;
		}

		return null;
	}}

	${breakpointsMedia({
		md: css`
			padding: 10px 40px;
			flex-direction: row;
			height: 100px;
		`,
	})};
`;
