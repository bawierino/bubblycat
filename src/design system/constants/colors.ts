export const shadowColorOpacitiesRaw = {
	default: 0.26,
	light: 0.22,
	veryDark: 0.49,
	veryLight: 0.18,
	dark: 0.33
};

export const colors = {
	shades: {
		none: 'white',
		lightBlueGray: '#EEEEF4'
	},
	font: { default: '#32323e', light: '#535366', veryLight: '#b0bec5' },
	shadows: {
		default: `rgba(0, 0, 0, ${shadowColorOpacitiesRaw.default})`,
		light: `rgba(0, 0, 0, ${shadowColorOpacitiesRaw.light})`,
		dark: `rgba(0, 0, 0, ${shadowColorOpacitiesRaw.dark})`,
		veryDark: `rgba(0, 0, 0, ${shadowColorOpacitiesRaw.veryDark})`
	},
	primary: {
		hoveryLight: '#e3f2fd',
		veryLight: '#81d4fa',
		light: '#63a4ff',
		main: '#2b5baf',
		dark: '#004ba0'
	},
	secondary: {
		main: '#B3986B',
		light: '#FFECCC',
		hoveryLight: '#FFF8EB',
		dark: '#736145'
	},
	alternativeSecondary: { main: '#A252B3', dark: '#8A309C', hoveryLight: '#FAE0FF' }
};
