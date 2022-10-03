import React from "react";
import { HelperTextWrapper, TextFieldWrapper } from "./TextField.styled";

export interface TextFieldProps {
	name: string;
	type: string;
	icon: React.ReactNode;
	labelText?: string;
	value: string | number;
	handleChange: React.ChangeEventHandler<HTMLInputElement>;
	onBlur: React.FocusEventHandler<HTMLInputElement>;
	min?: number | string;
	max?: number | string;
	minLength?: number;
	maxLength?: number;
	pattern?: string;
	required?: boolean;
	/**
	 * Pass a string message to be displayed when user enters the page.
	 */
	helperText?: string;
	/**
	 * Pass an error message to be displayed when user touches the input and provides wrong value.
	 */
	error?: string;
	placeholder?: string;
	/**
	 * Change the default behaviour of an input.
	 * 
	 * @example 
	 * 
	 * 	onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
							if (e.key === "-" || e.key === "e" || e.key === "," || e.key === ".") {
								e.preventDefault();
							}
						}}
	 */
	onKeyDown?: ((e: React.SyntheticEvent) => void) | ((e: React.KeyboardEvent<HTMLInputElement>) => void);
}

const TextField = ({
	name,
	type,
	icon,
	value,
	handleChange,
	onBlur,
	labelText,
	min,
	max,
	minLength,
	maxLength,
	pattern,
	required,
	helperText,
	error,
	placeholder,
	onKeyDown,
}: TextFieldProps) => {
	return (
		<TextFieldWrapper>
			<label htmlFor={name} className="label">
				{labelText || name}
				{required && <span>*</span>}
			</label>
			<div className="content">
				<div className="icon">{icon}</div>
				<input
					name={name}
					type={type}
					value={value}
					onChange={handleChange}
					min={`${min}`}
					max={`${max}`}
					minLength={minLength}
					maxLength={maxLength}
					pattern={`${pattern}`}
					required={required}
					placeholder={placeholder}
					onBlur={onBlur}
					onKeyDown={onKeyDown}
					className="input"
				/>
			</div>
			{(helperText || error) && <HelperTextWrapper error={error}>{error ? error : helperText}</HelperTextWrapper>}
		</TextFieldWrapper>
	);
};

export default TextField;
