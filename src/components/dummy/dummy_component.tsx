import { Aurum } from 'aurumjs';
import { dummyStyle } from './dummy.style';

export interface DummyProps {
	label?: string;
}

export function Dummy(props: DummyProps) {
	const { label } = props ?? {};

	const renderLabel = () => {
		return label ? <span>{label}</span> : undefined;
	};

	return (
		<div class={dummyStyle()}>
			<span>Just a random dummy component for testing </span>
			{renderLabel()}
		</div>
	);
}
