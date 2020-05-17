import { Aurum } from 'aurumjs';
import './scss/example.scss';
import { Example } from './example';

Aurum.attach(
	<div>
		<b>Hello Bubbly Cat!</b> <br /> Eventually, we will have a gallery here <br /> <Example></Example>
	</div>,
	document.body
);
