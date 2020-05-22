import { Aurum, AurumElement, DataSource } from 'aurumjs';
import { css } from 'emotion';
import { BubblyComponentPropsInternal } from '../../shared/shared_component_props';

export interface DummyProps {
	prefix: DataSource<string>;
}

export function Dummy(props: BubblyComponentPropsInternal<DummyProps>): AurumElement {
	const { prefix } = props;
	return (
		<div
			class={props.sharedProps.theme.primaryMain.map(
				(color) =>
					css`
						color: ${color};
					` +
					' ' +
					props.sharedProps.className
			)}
		>
			{prefix}
			你好我的朋友
		</div>
	);
}
