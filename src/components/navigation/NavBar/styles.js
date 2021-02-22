import styled from "styled-components";

export const NavBarWrapper = styled.nav``;

NavBarWrapper.Menu = styled.ul`
	display: flex;
	align-items: center;
	z-index: 100;
`;

NavBarWrapper.Item = styled.li`
	margin: 0 40px;
	position: relative;
`;

NavBarWrapper.Link = styled.a`
	font-family: "Fira Code";
	font-size: 16px;
	padding: 10px;
	color: ${({ theme }) => theme.colors.white};
	display: inline-block;
	border-radius: 20px 20px 20px 0;
	box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.1);
	transition: all 200ms ease-in-out;

	&.active {
		background: ${({ theme }) => theme.colors.secondary};
		color: ${({ theme }) => theme.colors.white};
		font-weight: 600;
	}

	&:hover {
		border-radius: 0;
		transform: scale(0.98) translateY(2px);
	}
`;
