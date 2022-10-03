import { InspectedCarInfoWrapper } from "./InspectedCarInfo.styled";

export interface InspectedCarInfoProps {
	title: string;
	value: string | number;
	icon: React.ReactNode;
}

const InspectedCarInfo = ({ title, value, icon }: InspectedCarInfoProps) => {
	return (
		<InspectedCarInfoWrapper>
			{icon}
			<p>
				<span>{title}: </span>
				{value}
			</p>
		</InspectedCarInfoWrapper>
	);
};

export default InspectedCarInfo;
