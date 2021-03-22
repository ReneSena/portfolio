import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.grey100};

	& a {
		position: relative;
		top: -80px;
	}
`;
