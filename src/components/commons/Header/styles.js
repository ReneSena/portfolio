import styled from "styled-components";

export const Container = styled.header`
	width: 100%;
	height: 80px;
	padding: 10px 40px;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	position: fixed;
	top: 0;
	left: 0;
	border-bottom: 0.2px dashed rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(5px);
	z-index: 100;
`;

export const Title = styled.h1`
	font-size: 24px;
	text-transform: uppercase;
	font-family: "Fira Code", sans-serif;
	font-weight: 300;
	color: ${({ theme }) => theme.colors.gray};
	margin: 0;
`;
