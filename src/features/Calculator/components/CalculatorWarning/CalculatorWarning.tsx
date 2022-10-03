import { CalculatorWarningWrapper } from "./CalculatorWarning.styled";
export interface CalculatorWarningProps {
	icon: React.ReactNode;
	msg: string;
	variant: "warning" | "error";
}
const CalculatorWarning = ({ icon, msg, variant }: CalculatorWarningProps) => {
	return (
		<CalculatorWarningWrapper variant={variant}>
			<div className="icon">{icon}</div>
			<p>{msg}</p>
		</CalculatorWarningWrapper>
	);
};

export default CalculatorWarning;
