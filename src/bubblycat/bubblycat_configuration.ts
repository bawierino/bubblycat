import { DataSourcify } from '../utils/types/data_types';

export interface BubblycatConfiguration {
	theme: DataSourcify<BubblycatTheme>;
}

export interface BubblycatTheme {
	primaryMain: string;
}
