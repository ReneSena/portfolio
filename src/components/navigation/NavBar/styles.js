import styled from "styled-components";

export const NavBarWrapper = styled.nav``;

NavBarWrapper.Menu = styled.ul`
	display: flex;
	align-items: center;
`;

NavBarWrapper.Item = styled.li`
	margin: 0 40px;
	position: relative;
`;

NavBarWrapper.Link = styled.a`
	color: ${({ theme }) => theme.colors.gray};
	transition: hover 800ms ease-in-out;

	&:after {
		content: "";
		display: block;
		width: 15px;
		height: 2px;
		background-color: ${({ theme }) => theme.colors.gray};
		position: absolute;
		bottom: -5px;
	}

	&:hover {
		opacity: 0.5;
	}
`;
