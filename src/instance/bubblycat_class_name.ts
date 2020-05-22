import { css } from 'emotion';

export const bubblycatClassName = css`
	label: bubbly-cat-component;

	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-tap-highlight-color: rgba(255, 255, 255, 0);

	*,
	::before,
	::after {
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
		box-sizing: border-box;
	}
`;
