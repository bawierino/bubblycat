import { AurumElement, Aurum, DataSource, ObjectDataSource } from 'aurumjs';
import { Dummy } from '../components/primitives/dummy/dummy';
import { BubblycatConfiguration, BubblycatTheme, ThemeKeys } from './bubblycat_configuration';
import { BubblyComponent } from '../components/shared/shared_component_interfaces';

export class Bubblycat {
	private readonly configuration: BubblycatConfiguration;

	constructor(configuration: BubblycatConfiguration) {
		this.configuration = configuration;
	}

	private wrapComponent(component: BubblyComponent): () => AurumElement {
		return () => component({ sharedProps: { theme: this.getCurrentTheme() } });
	}

	get WrappedDummy(): () => AurumElement {
		// get WrappedDummy(): () => typeof Dummy {
		// return this.wrapComponent(Dummy) as () => typeof Dummy;
		return this.wrapComponent(Dummy);
	}

	get Dummy(): () => AurumElement {
		return () => <Dummy sharedProps={{ theme: this.getCurrentTheme() }}></Dummy>;
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
