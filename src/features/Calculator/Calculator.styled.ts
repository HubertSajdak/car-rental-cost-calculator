import styled from "styled-components";

export const CalculatorWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 52px 70px;
	background-color: ${({ theme }) => theme.palette.whitesmoke};
	border-radius: 20px;
	width: 100%;
	max-width: 1400px;
	box-shadow: ${({ theme }) => theme.shadows[4]};
	h1 {
		font-weight: bold;
		width: 100%;
		text-align: center;
		font-size: 50px;
		margin: 40px 0 40px;
		padding: 0 15px;
		text-transform: capitalize;
	}

	.carInfo {
		display: flex;
		flex-direction: column;
		gap: 24px;
		width: 100%;
		font-size: 20px;
		text-transform: capitalize;
		margin-bottom: 50px;
		span {
			font-weight: bold;
		}
	}
	.gasPrice {
		display: flex;
		align-items: center;
		margin-bottom: 50px;
		gap: 8px;
		font-size: 20px;
		width: 100%;
		color: ${({ theme }) => theme.palette.red};
		text-transform: capitalize;
		h3 {
			font-weight: normal;
			color: ${({ theme }) => theme.palette.black};
			span {
				font-weight: bold;
			}
		}
	}
	.inputsArea {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		width: 100%;
		min-height: 200px;
		margin-bottom: 16px;
	}

	.resultsArea {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-top: 50px;
		width: 100%;
		padding: 24px;
		border: 2px solid ${({ theme }) => theme.palette.red};
		background-color: ${({ theme }) => theme.palette.white};
		border-radius: 20px;
		overflow: hidden;
		p {
			padding: 10px;
		}
	}
	.returnBtn {
		position: absolute;
		top: 0;
		left: 0;
		padding: 25px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		text-transform: uppercase;
		font-weight: bold;
		color: ${({ theme }) => theme.palette.black};
	}

	@media (max-width: 768px) {
		padding: 56px 8px 72px;

		h1 {
			font-size: 40px;
			margin: 40px 0 40px;
		}

		.gasPrice {
			margin-bottom: 40px;
			font-size: 16px;
			width: 100%;
			max-width: 730px;
		}
		.inputsArea {
			grid-template-columns: 1fr;
		}
		.carInfo {
			font-size: 16px;
		}
		.resultsArea {
			margin-top: 20px;
		}
	}
`;
