import styled from 'styled-components';

export const Container = styled.footer`
	width: 100%;
	height: 80px;
	padding: 0 40px;
	color: ${({ theme }) => theme.colors.black};
	background: ${({ theme }) => theme.colors.grey100};
	font: ${({ theme }) => theme.typographys.paragraph1.font};
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	border-top: 0.2px dashed rgba(0, 0, 0, 0.1);
	margin-top: 40px;
`;
