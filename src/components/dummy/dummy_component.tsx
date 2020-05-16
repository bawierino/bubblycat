import { Aurum, DataSource } from 'aurumjs';
import { dummyStyle } from './dummy.style';

export type LabelType = DataSource<string> | string;

export interface DummyProps {
	label?: LabelType;
}

export function Dummy(props: DummyProps) {
	const { label } = props ?? {};

	const renderLabel = () => {
		return label ? <span>{label}</span> : undefined;
	};

	return (
		<div class={dummyStyle()}>
			<span>Just a random bubblycat dummy component for testing </span>
			{renderLabel()}
		</div>
	);
}
