import { Aurum, AurumElement, DataSource } from 'aurumjs';
import { AurumData } from '../../../utils/types/data_types';
import { AurumFC } from '../../../utils/types/function_types';
import { textInputStyle } from './text_input.style';

export interface TextInputProps {
	value: AurumData<string>;
	label?: AurumData<string>;
	placeholder?: AurumData<string>;
}

export const TextInputComponent: AurumFC<TextInputProps> = (props): AurumElement => {
	const { label, value, placeholder } = props;
	const focussed = new DataSource<boolean>(false);
	// const inputRef = React.useRef(undefined as HTMLInputElement);
	const empty = !value;

	return (
		<div class={`${textInputStyle}${focussed ? ' focussed' : ''}${!empty ? ' not-empty' : ''}`}>
			<input
				type="text"
				value={value}
				placeholder={placeholder}
				onFocus={() => {
					focussed.update(true);
				}}
				onBlur={() => {
					focussed.update(false);
				}}
				// ref={inputRef}
			/>
			{label && (
				<label
					onClick={() => {
						if (!focussed && empty) {
							// inputRef.current.focus();
						}
					}}
				>
					{label}
				</label>
			)}
		</div>
	);
};
