import styled from "styled-components";

export const TextFieldWrapper = styled.div`
	width: 100%;
	margin-bottom: 16px;
	min-height: 120px;
	.label {
		font-size: 16px;
		color: #000;
		font-weight: 700;
		text-align: left;
		span {
			color: ${({ theme }) => theme.palette.red};
		}
	}
	.content {
		position: relative;
		display: flex;
		border-radius: 10px;
		box-shadow: ${({ theme }) => theme.shadows[1]};
		min-height: 53px;
		margin-top: 8px;
		border-radius: 10px;
		overflow: hidden;
		.icon {
			width: 100%;
			max-width: 53px;
			display: flex;
			justify-content: center;
			align-items: center;
			color: tomato;
			background-color: ${({ theme }) => theme.palette.white};
			&:first-child {
				font-size: 30px;
			}
		}
		.icon::before {
			content: "";
			height: 53px;
			width: 1px;
			background: #e7e9ee;
			position: absolute;
			top: 0;
			left: 50px;
		}
		.input {
			padding: 10px 27px 10px 27px;
			border: none;
			width: 100%;
			font-weight: bold;
			font-size: 14px;
			font-family: "Roboto", sans-serif;
			outline: none;
		}
	}
`;

export const HelperTextWrapper = styled.p<{
	error?: string;
}>`
	width: 100%;
	margin: 8px 0;
	text-align: center;
	color: ${props => (props.error ? ({ theme }) => theme.palette.red : ({ theme }) => theme.palette.black)};
`;
