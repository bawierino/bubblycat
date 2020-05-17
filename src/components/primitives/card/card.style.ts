import { css } from 'emotion';
import { animationDurations } from '../../../design system/constants/animations';
import { borderRadiuses } from '../../../design system/constants/border_radiuses';
import { boxShadows } from '../../../design system/constants/box_shadows';
import { colors } from '../../../design system/constants/colors';
import { distances } from '../../../design system/constants/distances';

export const cardStyle = css`
	label: card-component;

	padding: ${distances[12]};
	margin: ${distances[12]};

	background-color: ${colors.shades.none};

	border-radius: ${borderRadiuses[6]};

	box-shadow: ${boxShadows.default};

	transition: box-shadow ${animationDurations.normal} ease-in-out;
	&.no-touch {
		&:hover {
			box-shadow: ${boxShadows.high};
		}
	}
`;
