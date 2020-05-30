import { Aurum, AurumElement, DataSource } from 'aurumjs';
import { css } from 'emotion';
import { BubblycatComponentPropsInternal } from '../../generic/bubblycat_component';
import { Icon, IconClass } from '../../../design system/icons/icons';

export interface DummyProps {
	prefix: DataSource<string>;
}

export function Dummy(props: BubblycatComponentPropsInternal<DummyProps>): AurumElement {
	const { prefix } = props;
	props.sharedProps.isTouchingDevice.listen((ht) => console.log(ht));
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
			<Icon iconClass={IconClass.CROSS}></Icon>
		</div>
	);
}
