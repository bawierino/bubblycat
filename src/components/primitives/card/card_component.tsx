import { Aurum } from 'aurumjs';
import { AurumFC } from '../../../utils/types/function_types';
import { cardStyle } from './card.style';

export interface CardProps {}

export const CardComponent: AurumFC<CardProps> = (props, children) => {
	// TODO: touch handling
	const hasTouchClassName = '';

	return <div class={`${cardStyle} ${hasTouchClassName}`}>{children}</div>;
};
