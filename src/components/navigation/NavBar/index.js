import React from "react";
import links from "./content";
import { NavBarWrapper } from "./styles";

function NavBar() {
	return (
		<NavBarWrapper>
			<NavBarWrapper.Menu>
				{links.map((link) => (
					<NavBarWrapper.Item key={link.url}>
						<NavBarWrapper.Link href={link.url}>
							{link.label}
						</NavBarWrapper.Link>
					</NavBarWrapper.Item>
				))}
			</NavBarWrapper.Menu>
		</NavBarWrapper>
	);
}

export default NavBar;
