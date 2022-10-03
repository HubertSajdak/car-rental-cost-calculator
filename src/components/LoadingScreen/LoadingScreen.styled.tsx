import styled from "styled-components";

export const LoadingScreenWrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-align: center;

	a {
		color: ${({ theme }) => theme.palette.red};
		font-weight: bold;
		margin-top: 50px;
	}
	@media (max-width: 700px) {
		h1 {
			font-size: 32px;
		}
	}
`;
