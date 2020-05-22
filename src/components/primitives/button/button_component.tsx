import { Aurum, AurumElement } from 'aurumjs';
import { animationDurationsRawMs } from '../../../design system/constants/animations';
import { BubblycatComponentPropsInternal } from '../../generic/bubblycat_component';
import { buttonStyle } from './button.style';

export interface ButtonProps {
	id?: string;
	label?: string;
	icon?: string;
	iconPlacement?: ButtonIconPlacement;
	onCLick?: (id: string) => void;
}

export enum ButtonIconPlacement {
	LEFT = 'LEFT',
	RIGHT = 'RIGHT'
}

export function ButtonComponent(props: BubblycatComponentPropsInternal<ButtonProps>): AurumElement {
	const { id, label = '', icon = '', onCLick = () => {}, iconPlacement = ButtonIconPlacement.LEFT } = props;
	// TODO: touch handling
	const hasTouchClassName = '';

	function renderIcon(): AurumElement {
		if (icon) {
			return <i class={`${icon} icon`} />;
		} else {
			return undefined;
		}
	}

	return (
		<div
			class={`${buttonStyle} ${hasTouchClassName}`}
			onClick={() => {
				setTimeout(() => {
					onCLick(id);
				}, animationDurationsRawMs.short);
			}}
		>
			{iconPlacement === ButtonIconPlacement.LEFT ? renderIcon() : <div> </div>}
			<div class="label">{label}</div>
			{iconPlacement === ButtonIconPlacement.RIGHT ? renderIcon() : <div> </div>}
		</div>
	);
}
