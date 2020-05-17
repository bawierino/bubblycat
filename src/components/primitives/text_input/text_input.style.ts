import { css } from 'emotion';
import { animationDurations } from '../../../design system/constants/animations';
import { colors } from '../../../design system/constants/colors';
import { distances } from '../../../design system/constants/distances';
import { fontSizes } from '../../../design system/constants/font_sizes';

const inputPadding = distances[8];

export const textInputStyle = css`
	label: text-input;

	position: relative;

	padding: ${inputPadding} ${inputPadding} ${distances[8]} ${inputPadding};
	margin-top: ${distances[12]};
	width: ${distances[200]};

	box-shadow: inset 0 -10px 4px -10px ${colors.shadows.default};
	border-radius: 1px;

	transition: box-shadow ${animationDurations.normal};
	&.focussed {
		box-shadow: inset 0 -10px 4px -10px ${colors.shadows.veryDark};
	}

	label {
		position: absolute;
		top: ${inputPadding};
		left: ${inputPadding};

		color: ${colors.font.default};
		font-size: ${fontSizes.default};

		cursor: text;

		transition: transform ${animationDurations.normal}, font-size ${animationDurations.normal}, color ${animationDurations.normal};
	}
	&.focussed,
	&.not-empty {
		label {
			transform: translateY(-18px);
			font-size: ${fontSizes.small};
			cursor: default;
		}
	}
	&.focussed {
		label {
			color: ${colors.font.light};
		}
	}

	input {
		outline: none;
		border: none;
		width: 100%;

		background-color: rgba(0, 0, 0, 0);
		color: ${colors.font.default};
		font-size: ${fontSizes.default};

		::placeholder {
			color: ${colors.font.veryLight};

			opacity: 0;
			transition: opacity ${animationDurations.normal};
		}

		&:focus {
			::placeholder {
				opacity: 1;
			}
		}
	}
`;
