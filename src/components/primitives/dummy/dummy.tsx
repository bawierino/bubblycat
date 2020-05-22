import { AurumElement, Aurum, DataSource } from 'aurumjs';
import { SharedComponentProps } from '../../shared/shared_component_props';
import { css } from 'emotion';

export function Dummy(props: { sharedProps: SharedComponentProps; prefix?: DataSource<string> }, children: AurumElement[]): AurumElement {
	const { prefix } = props;
	return (
		<div
			class={props.sharedProps.theme.primaryMain.map(
				(color) =>
					css`
						color: ${color};
					`
			)}
		>
			{prefix}
			你好我的朋友
		</div>
	);
}
