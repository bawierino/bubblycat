import { AurumFC } from '../src/utils/types/function_types';
import { Bubblycat } from '../src/instance/bubblycat';
import { Aurum } from 'aurumjs';

export const Example: AurumFC = () => {
	const bc = new Bubblycat();

	return <bc.Dummy />;
};
