import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

export const FormWrapper = styled.div`
	background-color: white;
	width: 100%;

	display: flex;
	align-items: center;
	flex-direction: column;
	border-radius: 20px;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);

	${breakpointsMedia({
		md: css`
			width: 1000px;
			height: 600px;
			flex-direction: row;
		`,
	})}
`;

FormWrapper.Ilustration = styled.div`
	background: #f4f0ff;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	margin-top: 20px;

	& img {
		width: 200px;
	}

	${breakpointsMedia({
		md: css`
			border-radius: 20px;
			margin-top: 0;

			flex: 0 0 450px;

			& img {
				width: 400px;
			}
		`,
	})}
`;

FormWrapper.Form = styled.form`
	width: 100%;
	margin: auto;
	padding: 20px;

	${breakpointsMedia({
		md: css`
			width: 400px;
			margin: auto;
			padding: 0;
		`,
	})}
`;
