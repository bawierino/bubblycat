import { css } from 'emotion';

export function dummyStyle(): string {
	return css`
		label: dummy;

		display: inline-flex;

		margin: 4px;
		padding: 4px;

		color: #546e7a;
		border: 1px solid #546e7a;
	`;
}
