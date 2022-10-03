import styled from "styled-components";

export const BasePageLayoutWrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.palette.white};
	padding: 16px 24px;
	width: 100%;
	min-height: 100vh;
	max-width: 1400px;
	margin: 0 auto;
	@media (max-width: 768px) {
		padding: 0px 8px;
	}
`;
