import React from 'react';
import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../utils/breakpointsMedia';

const Container = styled.div`
	display: flex;
	align-items: center;
	margin-left: 0;
	margin-top: 20px;

	${breakpointsMedia({
		md: css`
			margin-left: 120px;
			margin-top: 0;
		`,
	})}

	& h2 {
		color: #222;
		font-family: 'Fira Code', sans-serif;
		font-size: 24px;
		margin: 0;
	}

	& img {
		border-radius: 50%;
		margin-right: 20px;
		border: 4px inset #888;
	}
`;

function Brand() {
	return (
		<Container>
			<img
				src="https://avatars.githubusercontent.com/u/36897083?s=460&u=f1b8e17fb00e6d7bf8482e20f2d7efa442a2433e&v=4"
				width="60"
			/>
			<h2>Rene Sena</h2>
		</Container>
	);
}

export default Brand;
