import { Aurum } from 'aurumjs';
import { AurumFC } from '../../../../utils/types/function_types';
import { ButtonComponent, ButtonProps } from '../../button/button_component';
import { CardComponent } from '../card_component';
import { appCardStyle } from './app_card.style';

export interface AppCardProps {
	button: ButtonProps;
	title: string;
	description: string;
	titleBackground: string;
}

export const AppCardComponent: AurumFC<AppCardProps> = (props) => {
	const { button, title, description, titleBackground } = props;

	return (
		<CardComponent>
			<div class={appCardStyle}>
				<div class="title" style={`background: ${titleBackground}`}>
					{title}
				</div>
				<div class="description">{description}</div>
				<div class="button">
					<ButtonComponent {...button} />
				</div>
			</div>
		</CardComponent>
	);
};
