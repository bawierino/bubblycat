import { Aurum, AurumElement, DataSource } from 'aurumjs';
import { Bubblycat } from '../src/bubblycat/bubblycat';

export function Example(): AurumElement {
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
}
