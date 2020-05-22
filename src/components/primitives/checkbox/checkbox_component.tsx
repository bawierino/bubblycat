import { Aurum, AurumElement, DataSource } from 'aurumjs';
import { BubblycatComponentPropsInternal } from '../../generic/bubblycat_component';

export interface CheckboxProps {
	checked: DataSource<boolean>;
	label?: string;
}
export function Checkbox(props: BubblycatComponentPropsInternal<CheckboxProps>): AurumElement {
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
}
