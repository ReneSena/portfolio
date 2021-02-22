import styled from 'styled-components';

export const Container = styled.section`
	background-color: ${({ theme }) => theme.colors.black};
`;

export const Picture = styled.figure`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 20px;

	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.8);
	border-radius: 0 500px 0 500px;
`;

export const Avatar = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	filter: sepia(50%);
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
		url('https://avatars.githubusercontent.com/u/36897083?s=400&u=f1b8e17fb00e6d7bf8482e20f2d7efa442a2433e&v=4');
	background-repeat: no-repeat;
	background-size: cover;
	border: 3px solid ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.white};
	font: ${({ theme }) => theme.typographys.titleXS.font};
	margin: 0;
`;

export const Subtitle = styled.h2`
	color: ${({ theme }) => theme.colors.white};
	font: ${({ theme }) => theme.typographys.paragraph1.font};
`;
