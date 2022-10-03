import { Link } from "react-router-dom";
import { LoadingScreenWrapper } from "./LoadingScreen.styled";

export interface NotFoundProps {
	title: string;
}

const LoadingScreen = ({ title }: NotFoundProps) => {
	return (
		<LoadingScreenWrapper>
			<h1>{title}</h1>
			<Link to="/cars" className="">
				Return
			</Link>
		</LoadingScreenWrapper>
	);
};

export default LoadingScreen;
