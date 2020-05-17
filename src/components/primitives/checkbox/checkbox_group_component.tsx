import { ArrayDataSource, Aurum, AurumElement } from 'aurumjs';
import { AurumFC } from '../../../utils/types/function_types';
import { Checkbox, CheckboxProps } from './checkbox_component';

export interface CheckboxGroupProps {
	items: ArrayDataSource<CheckboxProps>;
	label?: string;
}

export const CheckboxGroup: AurumFC<CheckboxGroupProps> = (props) => {
	const { items, label } = props;
	const groupClass = '';

	const renderLabel = () => {
		return label ? <span>{label}:</span> : undefined;
	};

	const renderItem = (item: CheckboxProps): AurumElement => {
		return <Checkbox {...item} />;
	};

	return (
		<div class={groupClass}>
			{renderLabel()}
			{items.map(renderItem)}
		</div>
	);
};
