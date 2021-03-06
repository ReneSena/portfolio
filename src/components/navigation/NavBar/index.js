import React from 'react';
import { useRouter } from 'next/router';
import links from './content';
import { NavBarWrapper } from './styles';

function NavBar() {
	const router = useRouter();

	return (
		<NavBarWrapper>
			<NavBarWrapper.Menu>
				{links.map((link) => (
					<NavBarWrapper.Item key={link.url}>
						<NavBarWrapper.Link
							href={link.url}
							className={router.asPath === link.url && 'active'}>
							{link.label}
						</NavBarWrapper.Link>
					</NavBarWrapper.Item>
				))}
			</NavBarWrapper.Menu>
		</NavBarWrapper>
	);
}

export default NavBar;
