import styled, { css } from "styled-components";

export const CalculatorResultWrapper = styled.div<{
	total: boolean;
}>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;

	h4 {
		font-size: 16px;
		font-weight: bold;
		color: ${({ theme }) => theme.palette.black};
	}
	p {
		font-size: 16px;
		font-weight: 700;
		color: ${({ theme }) => theme.palette.black};
	}

	${props =>
		props.total === true &&
		css`
		border-bottom: 2px solid rgba(0,0,0,0.1);
			h4 {
				font-size: 20px;
			}
			p {
				font-size: 20px;
			 color: ${({ theme }) => theme.palette.red};
			 `}
`;
