import { CalculatorResultWrapper } from "./CalculatorResult.styled";
export interface CalculatorResultProps {
	title: string;
	/**
	 * If true, the calculation result will be displayed as a price.
	 */
	price?: number;
	/**
	 * If true, the calculation result will be displayed as a multiplier.
	 */
	multiplier?: number;
	/**
	 * If true, the calculation result will pop out.
	 */
	total?: boolean;
}
const CalculatorResult = ({ title, price, multiplier, total = false }: CalculatorResultProps) => {
	return (
		<CalculatorResultWrapper total={total}>
			<h4>{title}</h4>
			{price && <p>${price.toFixed(2)}</p>}
			{multiplier && <p>x{multiplier}</p>}
		</CalculatorResultWrapper>
	);
};

export default CalculatorResult;
