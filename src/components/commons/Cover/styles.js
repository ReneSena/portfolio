import styled from "styled-components";

export const Container = styled.section`
	width: 100%;
	height: 100%;
	background-color: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	font-size: 60px;
	background-image: linear-gradient(165deg, #f5f5f5 50%, #333 50%);
`;

export const Avatar = styled.div`
	width: 300px;
	height: 300px;
	border-radius: 50%;
	filter: sepia(50%);
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
		url("https://avatars.githubusercontent.com/u/36897083?s=400&u=f1b8e17fb00e6d7bf8482e20f2d7efa442a2433e&v=4");

	background-repeat: no-repeat;
	background-size: cover;
	box-shadow: 0 0 0 5px #333;
	z-index: 0;
`;
