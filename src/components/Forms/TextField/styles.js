import styled, { css } from 'styled-components';

export const InputWrapper = styled.div``;

InputWrapper.Label = styled.label`
	color: #333333;
	font-weight: 700;
	font-family: 'Open Sans';
	display: block;
	margin-bottom: 8px;
`;

InputWrapper.Input = styled.input`
	width: 100%;
	height: 50px;
	border: 1px solid #e4e4e4;
	border-radius: 5px;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);
	padding: 15px 20px;
	outline: none;
	margin-bottom: 24px;

	${(props) => {
		if (props.as === 'textarea') {
			return css`
				height: 150px;
				resize: none;
			`;
		}
	}}
`;
