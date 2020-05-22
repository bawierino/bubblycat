import { Aurum, AurumElement } from 'aurumjs';
import { BubblycatComponentPropsInternal } from '../../../generic/bubblycat_component';
import { ButtonComponent, ButtonProps } from '../../button/button_component';
import { CardComponent } from '../card_component';
import { appCardStyle } from './app_card.style';

export interface AppCardProps {
	button: ButtonProps;
	title: string;
	description: string;
	titleBackground: string;
}

export function AppCardComponent(props: BubblycatComponentPropsInternal<AppCardProps>): AurumElement {
	const { button, title, description, titleBackground } = props;

	return (
		<CardComponent sharedProps={props.sharedProps}>
			<div class={appCardStyle}>
				<div class="title" style={`background: ${titleBackground}`}>
					{title}
				</div>
				<div class="description">{description}</div>
				<div class="button">
					<ButtonComponent {...button} sharedProps={props.sharedProps} />
				</div>
			</div>
		</CardComponent>
	);
}
