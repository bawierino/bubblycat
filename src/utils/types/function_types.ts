import { Renderable } from 'aurumjs';

export type AurumFC<P> = (props: P, children?: Renderable) => Renderable;
