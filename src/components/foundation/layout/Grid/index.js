import styled, { css } from 'styled-components';
import breakpointsMedia from '../../Breakpoints';

const Container = styled.div`
	width: 100%;
	padding-right: 28px;
	padding-left: 28px;
	margin-right: auto;
	margin-left: auto;

	${breakpointsMedia({
		xs: css`
			max-width: initial;

			padding-right: 28px;
			padding-left: 28px;
		`,
		md: css`
			max-width: 768px;
			padding-right: 16px;
			padding-left: 16px;
		`,
	})}
`;

const Row = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-right: -16px;
	margin-left: -16px;
`;

const Col = styled.div`
	padding-right: 16px;
	padding-left: 16px;
	flex-basis: 0;
	flex-grow: 1;
	max-width: 100%;

	${({ value }) => {
		if (typeof value === 'number') {
			return css`
				flex: 0 0 ${(100 * value) / 12}%;
				max-width: ${(100 * value) / 12}%;
			`;
		}

		return breakpointsMedia({
			xs:
				value?.xs &&
				css`
					flex: 0 0 ${(100 * value.xs) / 12}%;
					max-width: ${(100 * value.xs) / 12}%;
					${value.xs}
				`,
			md:
				value?.md &&
				css`
					flex: 0 0 ${(100 * value.md) / 12}%;
					max-width: ${(100 * value.md) / 12}%;
					${value.md}
				`,
		});
	}}

	${({ offset }) => {
		if (typeof offset === 'number') {
			return css`
				margin-left: ${(100 * offset) / 12}%;
			`;
		}

		return breakpointsMedia({
			xs:
				offset?.xs &&
				css`
					margin-left: ${(100 * offset.xs) / 12}%;
				`,
			md:
				offset?.md &&
				css`
					margin-left: ${(100 * offset.md) / 12}%;
				`,
		});
	}}
`;

export const Grid = {
	Container,
	Row,
	Col,
};
