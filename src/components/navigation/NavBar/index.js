import React from 'react';
import { useRouter } from 'next/router';
import links from './content';
import { NavBarWrapper } from './styles';
import NextLink from '../../commons/Link';

function NavBar() {
	const router = useRouter();

	return (
		<NavBarWrapper>
			<NavBarWrapper.Menu>
				{links.map((link) => (
					<NavBarWrapper.Item key={link.url}>
						<NextLink
							href={link.url}
							as={NavBarWrapper.Link}
							className={router.asPath === link.url && 'active'}>
							{link.label}
						</NextLink>
					</NavBarWrapper.Item>
				))}
			</NavBarWrapper.Menu>
		</NavBarWrapper>
	);
}

export default NavBar;
