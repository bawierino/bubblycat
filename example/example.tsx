import { Aurum, DataSource } from 'aurumjs';
import { Bubblycat } from '../src/instance/bubblycat';
import { AurumFC } from '../src/utils/types/function_types';

export const Example: AurumFC = () => {
	const bc = new Bubblycat({ theme: { primaryMain: new DataSource('#00cc00') } });

	return (
		<div>
			<button onClick={() => bc.updateTheme({ primaryMain: 'orange' })}>make orange</button>
			<button
				onClick={() => {
					bc.updateTheme({ primaryMain: 'blue' });
				}}
			>
				make blue
			</button>
			<bc.Dummy prefix={new DataSource('hello')} />
		</div>
	);
};
