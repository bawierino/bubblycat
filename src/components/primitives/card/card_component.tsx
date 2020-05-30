import { Aurum, AurumElement } from 'aurumjs';
import { BubblycatComponentPropsInternal } from '../../generic/bubblycat_component';
import { cardStyle } from './card.style';

export interface CardProps {}

export function CardComponent(props: BubblycatComponentPropsInternal<CardProps>, children: ChildNode[]): AurumElement {
	// TODO: touch handling
	const hasTouchClassName = '';

	return <div class={`${cardStyle} ${hasTouchClassName}`}>{children}</div>;
}
