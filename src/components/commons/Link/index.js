import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import theme from '../../../theme';

import { StyledLink } from './styles';

function Link({ href, children, color, ...props }) {
	return (
		<NextLink href={href} passHref>
			<StyledLink {...props} color={color}>
				{children}
			</StyledLink>
		</NextLink>
	);
}

Link.defaultProps = {
	color: theme.colors.black,
};

Link.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	color: PropTypes.string,
};

export default Link;
