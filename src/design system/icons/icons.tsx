import { config, dom, library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Aurum, AurumElement } from 'aurumjs';
import { AttributeValue } from 'aurumjs/dist/utilities/common';
import { AurumData } from '../../utils/types/data_types';

config.autoReplaceSvg = true;
config.observeMutations = true;
// Insert the fontawesome style into the <head>
dom.insertCss();
// Watch the dom for icon changes or additions
dom.watch();

/**
 * Step 1: import and add any new icons here
 */
library.add(faTimes, faPlus, faCheck, faTrash);

/**
 * Step 2: add icon to predefined class
 */
export const enum IconClass {
	ADD = 'fas fa-plus',
	CONFIRM = 'fas fa-check',
	DELETE = 'fas fa-trash',
	CROSS = 'fas fa-times'
}

export function Icon(props: { iconClass: AurumData<IconClass>; className?: AurumData<string>; style?: AttributeValue }): AurumElement {
	const { iconClass, className = '', style } = props;

	return <i class={`${iconClass} ${className}`} style={style} />;
}
