import { Aurum, DataSource } from 'aurumjs';
import { AurumFC } from '../../../utils/types/function_types';

export interface CheckboxProps {
	checked: DataSource<boolean>;
	label?: string;
}

export const Checkbox: AurumFC<CheckboxProps> = (props) => {
	const { checked, label } = props;

	return (
		<div
			onClick={() => {
				checked.update(!checked.value);
			}}
		>
			<input type="checkbox" checked={checked}></input>
			{label && <label>{label}</label>}
		</div>
	);
};
