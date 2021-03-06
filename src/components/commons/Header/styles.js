import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const Container = styled.header`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	z-index: 100;
	transition: background 500ms linear;
	background-color: #fff;
	color: white;

	${(props) => {
		if (props.isInitial) {
			return css`
				background-color: rgba(0, 0, 0, 0.2);
				backdrop-filter: blur(10px);
			`;
		}
	}}

	${breakpointsMedia({
		md: css`
			padding: 10px 40px;
			flex-direction: row;
			height: 100px;
		`,
	})};
`;
