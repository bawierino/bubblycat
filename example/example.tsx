import { Aurum, ArrayDataSource, DataSource } from 'aurumjs';
import { css } from 'emotion';
import { AurumFC } from '../src/utils/types/function_types';
import { ButtonComponent } from '../src/components/primitives/button/button_component';
import { CardComponent } from '../src/components/primitives/card/card_component';
import { AppCardComponent } from '../src/components/primitives/card/app_card/app_card_component';
import { CheckboxGroup } from '../src/components/primitives/checkbox/checkbox_group_component';
import { TextInputComponent } from '../src/components/primitives/text_input/text_input_component';
import { CheckboxProps } from '../src/components/primitives/checkbox/checkbox_component';

const exampleWrapper = css`
	display: flex;
	flex-direction: column;
	margin: 16px;

	> * {
		margin: 8px 0px;
	}
`;

export const Example: AurumFC = () => {
	const checked = new DataSource<boolean>(false);
	const checkboxItems = new ArrayDataSource<CheckboxProps>([
		{ checked, label: `I am a checkbox` },
		{ checked, label: `Me too, I even copy your state!` }
	]);
	const inputValue = new DataSource<string>('');

	return (
		<div class={`${exampleWrapper}`}>
			<h3>Here are some examples:</h3>
			<ButtonComponent label={'click me'} />
			<CardComponent>I'm a card component!</CardComponent>
			<div>
				<AppCardComponent
					title={`I'm a app card component!`}
					button={{ label: 'click me too!' }}
					description={'I can describe something'}
					titleBackground={'red'}
				></AppCardComponent>
			</div>
			<CheckboxGroup items={checkboxItems}></CheckboxGroup>
			<TextInputComponent label={inputValue.map((val) => `Check out my value: ${val ?? ''}`)} value={inputValue}></TextInputComponent>
		</div>
	);
};
