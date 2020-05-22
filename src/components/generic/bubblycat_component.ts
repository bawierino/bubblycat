import { AurumElement, DataSource } from 'aurumjs';
import { BubblycatConfiguration } from '../../bubblycat/bubblycat_configuration';

export type BubblycatComponent<P = {}> = (props: P & { sharedProps: SharedComponentProps }, children?: AurumElement[]) => AurumElement;

export type BubblycatComponentPropsInternal<P extends {}> = P & { sharedProps: SharedComponentProps };

export interface SharedComponentProps {
	theme: BubblycatConfiguration['theme'];
	className: string;
	hasTouch: DataSource<boolean>;
}
