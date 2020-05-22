import { AurumElement, DataSource, CancellationToken } from 'aurumjs';
import { Dummy, DummyProps } from '../components/primitives/dummy/dummy';
import { BubblycatComponent } from '../components/generic/bubblycat_component';
import { pseudoGlobalClassName } from './pseudo_global_class_name';
import { BubblycatConfiguration, BubblycatTheme } from './bubblycat_configuration';

export class Bubblycat {
	private readonly configuration: BubblycatConfiguration;
	private sharedClassName: string;
	private isTouching: DataSource<boolean>;
	private cancellationToken: CancellationToken;

	// SETUP

	constructor(configuration: BubblycatConfiguration) {
		this.configuration = configuration;
		this.sharedClassName = pseudoGlobalClassName;
		this.cancellationToken = new CancellationToken();
		this.setupTouchSupport();
	}

	private setupTouchSupport(): void {
		this.isTouching = new DataSource<boolean>(false);
		window.addEventListener('touchstart', this.handleTouchStart.bind(this));
		window.addEventListener('touchend', this.handleTouchEnd.bind(this));

		this.cancellationToken.addCancelable(() => {
			window.removeEventListener('touchstart', this.handleTouchStart.bind(this));
			window.removeEventListener('touchend', this.handleTouchEnd.bind(this));
		});
	}

	private handleTouchStart(): void {
		this.isTouching.update(true);
	}

	private handleTouchEnd(): void {
		this.isTouching.update(false);
	}

	// PUBLIC API

	public destroy(): void {
		this.cancellationToken.cancel();
	}

	public updateTheme(theme: Partial<BubblycatTheme>): void {
		for (const themePartKey of Object.keys(theme)) {
			this.configuration.theme[themePartKey as keyof BubblycatTheme].update(theme[themePartKey]);
		}
	}

	private getCurrentTheme(): BubblycatConfiguration['theme'] {
		return this.configuration.theme;
	}

	// COMPONENT EXPOSING

	get Dummy(): (props?: DummyProps) => AurumElement {
		return this.wrapComponent<typeof Dummy, DummyProps>(Dummy);
	}

	private wrapComponent<C extends BubblycatComponent<P>, P>(component: C): (props: P) => AurumElement {
		return (props) =>
			component({
				sharedProps: { theme: this.getCurrentTheme(), className: this.sharedClassName, isTouchingDevice: this.isTouching },
				...(props ?? ({} as P))
			});
	}
}
