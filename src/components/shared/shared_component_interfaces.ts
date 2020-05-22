import { AurumElement, Aurum, DataSource, ObjectDataSource } from 'aurumjs';
import { SharedComponentProps } from './shared_component_props';

export type BubblyComponent<P = {}> = (props: P & { sharedProps: SharedComponentProps }, children?: AurumElement[]) => AurumElement;
