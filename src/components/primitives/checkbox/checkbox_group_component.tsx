import { ArrayDataSource, Aurum, AurumElement } from 'aurumjs';
import { BubblycatComponentPropsInternal } from '../../generic/bubblycat_component';
import { Checkbox, CheckboxProps } from './checkbox_component';

export interface CheckboxGroupProps {
	items: ArrayDataSource<CheckboxProps>;
	label?: string;
}

export function CheckboxGroup(props: BubblycatComponentPropsInternal<CheckboxGroupProps>): AurumElement {
	const { items, label } = props;
	const groupClass = '';

	const renderLabel = () => {
		return label ? <span>{label}:</span> : undefined;
	};

	const renderItem = (item: CheckboxProps): AurumElement => {
		return <Checkbox {...item} sharedProps={props.sharedProps} />;
	};

	return (
		<div class={groupClass}>
			{renderLabel()}
			{items.map(renderItem)}
		</div>
	);
}
