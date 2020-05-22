import { AurumElement } from 'aurumjs';
import { Dummy, DummyProps } from '../components/primitives/dummy/dummy';
import { BubblyComponent } from '../components/shared/shared_component_interfaces';
import { bubblycatClassName } from './bubblycat_class_name';
import { BubblycatConfiguration, BubblycatTheme } from './bubblycat_configuration';

export class Bubblycat {
	private readonly configuration: BubblycatConfiguration;
	private sharedClassName: string;

	constructor(configuration: BubblycatConfiguration) {
		this.configuration = configuration;
		this.sharedClassName = bubblycatClassName;
	}

	private wrapComponent<C extends BubblyComponent<P>, P>(component: C): (props: P) => AurumElement {
		return (props) => component({ sharedProps: { theme: this.getCurrentTheme(), className: this.sharedClassName }, ...(props ?? ({} as P)) });
	}

	get Dummy(): (props?: DummyProps) => AurumElement {
		return this.wrapComponent<typeof Dummy, DummyProps>(Dummy);
	}

	public updateTheme(theme: Partial<BubblycatTheme>): void {
		for (const themePartKey of Object.keys(theme)) {
			this.configuration.theme[themePartKey as keyof BubblycatTheme].update(theme[themePartKey]);
		}
	}

	private getCurrentTheme(): BubblycatConfiguration['theme'] {
		return this.configuration.theme;
	}
}
