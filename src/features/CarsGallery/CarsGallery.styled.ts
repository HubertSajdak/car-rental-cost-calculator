import styled from "styled-components";

export const CarsGalleryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex-wrap: wrap;
	padding: 50px 18px 70px;
	background-color: ${({ theme }) => theme.palette.whitesmoke};
	border-radius: 20px;
	width: 100%;
	max-width: 1400px;
	text-transform: capitalize;
	text-align: center;
	box-shadow: ${({ theme }) => theme.shadows[4]};

	.carList {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
	}

	h1 {
		font-weight: bold;
		font-size: 50px;
		margin: 0 0 40px;
		padding: 0 15px;
	}
	h2 {
		margin-bottom: 20px;
	}
	.cars__list {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin: 0 16px;
		max-width: 1400px;
	}
	@media (max-width: 700px) {
		h1 {
			font-size: 32px;
		}
		h2 {
			font-size: 24px;
			margin-bottom: 16px;
		}
	}
`;
