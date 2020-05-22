import { BubblycatConfiguration } from '../../instance/bubblycat_configuration';

export interface SharedComponentProps {
	theme: BubblycatConfiguration['theme'];
	className: string;
}

export type BubblyComponentProps<P extends SharedComponentProps> = Omit<P, 'sharedProps'>;
export type BubblyComponentPropsInternal<P extends {}> = P & { sharedProps: SharedComponentProps };
