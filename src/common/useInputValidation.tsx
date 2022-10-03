import { useState } from "react";

const useInputValidation = (
	validateValue: (validateSchema: number | string) => boolean,
	defaultValue: string | number
) => {
	const [enteredValue, setEnteredValue] = useState(defaultValue);
	const [isTouched, setIsTouched] = useState(false);

	const valueIsValid = validateValue(enteredValue);
	const hasError = !valueIsValid && isTouched;

	const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredValue(e.target.value);
	};

	const inputBlurHandler = () => {
		setIsTouched(true);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		isTouched,
		hasError,
		valueChangeHandler,
		inputBlurHandler,
	};
};

export default useInputValidation;
