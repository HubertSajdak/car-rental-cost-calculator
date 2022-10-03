import styled from "styled-components";

export const CarCardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.palette.white};
	box-shadow: ${({ theme }) => theme.shadows[4]};
	border-radius: 10px;
	width: 100%;
	max-width: 325px;
	margin: 16px 8px;
	padding: 16px;
	border-bottom: 5px solid ${({ theme }) => theme.palette.red};
	cursor: pointer;
	div {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		gap: 10px;
		width: 100%;
		color: ${({ theme }) => theme.palette.red};
		font-size: 16px;
	}
	h3,
	p {
		color: ${({ theme }) => theme.palette.black};
		margin: 16px 0;
	}

	span {
		font-weight: bold;
	}
	@media (max-width: 768px) {
		h3 {
			font-size: 16px;
		}
		p {
			font-size: 14px;
		}
	}
`;
