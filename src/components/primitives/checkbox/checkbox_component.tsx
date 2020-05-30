import { Aurum, AurumElement, DataSource } from 'aurumjs';
import { AurumDataSource } from '../../../utils/types/data_types';
import { BubblycatComponentPropsInternal } from '../../generic/bubblycat_component';

export interface CheckboxProps {
	checked: AurumDataSource<boolean>;
	label?: string;
}
export function Checkbox(props: BubblycatComponentPropsInternal<CheckboxProps>): AurumElement {
	const { checked, label } = props;

	const onClick = () => {
		if (checked instanceof DataSource) {
			checked.update(!checked.value);
		}
	};

	return (
		<div onClick={onClick}>
			<input type="checkbox" checked={checked}></input>
			{label && <label>{label}</label>}
		</div>
	);
}
