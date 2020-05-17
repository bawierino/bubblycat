import { colors } from './colors';

export const boxShadows = {
	default: `0px 2px 6px 0px ${colors.shadows.default}`,
	high: `0px 2px 12px 0px ${colors.shadows.default}`,
	popover: `0px 4px 24px 0px ${colors.shadows.light}`,
	close: `0 0 2px 0 ${colors.shadows.dark}`,
	deep: `0 1px 4px ${colors.shadows.default} inset`,
	deeper: `0 2px 6px ${colors.shadows.dark} inset`
};
