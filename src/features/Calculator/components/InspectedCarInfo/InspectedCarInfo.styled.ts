import styled from "styled-components";

export const InspectedCarInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	color: ${({ theme }) => theme.palette.red};
	p {
		color: ${({ theme }) => theme.palette.black};
	}
`;
