import { BubblycatConfiguration } from '../../instance/bubblycat_configuration';

export interface SharedComponentProps {
	theme: BubblycatConfiguration['theme'];
}

export type BubblyComponentProps<P extends SharedComponentProps> = Omit<P, 'theme'>;
