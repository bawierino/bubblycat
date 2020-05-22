import { AurumElement } from 'aurumjs';

export type AurumFC<P = {}> = (props: P, children?: AurumElement) => AurumElement;
