import styled from "styled-components";

export const CalculatorWarningWrapper = styled.div<{
	variant: "warning" | "error";
}>`
	display: flex;
	align-items: center;
	width: 100%;
	font-size: 30px;
	align-self: left;
	text-align: justify;
	color: ${props =>
		props.variant === "error" ? ({ theme }) => theme.palette.red : ({ theme }) => theme.palette.warning};
	margin: 10px;
	p {
		margin-left: 10px;
		font-size: 20px;
		color: ${({ theme }) => theme.palette.black};
	}
	@media (max-width: 768px) {
		p {
			font-size: 16px;
		}
	}
`;
