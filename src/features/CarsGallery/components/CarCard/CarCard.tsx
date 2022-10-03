import { useNavigate } from "react-router-dom";
import { CarCardWrapper } from "./CarCard.styled";
import { AiFillCar } from "react-icons/ai";
import { BiMoney, BiGasPump } from "react-icons/bi";
import { ImLocation, ImPriceTag } from "react-icons/im";

export interface CarCardProps {
	id: number;
	carName: string;
	priceCategory: string;
	location: string;
	costPerDay: number;
	avgConsumption: number;
	carsAvailable: number;
}
const CarCard = ({ id, carName, priceCategory, location, costPerDay, avgConsumption, carsAvailable }: CarCardProps) => {
	const navigate = useNavigate();
	return (
		<CarCardWrapper onClick={() => navigate(`/cars/${id}`)}>
			<h3 className="car__name">car: {carName}</h3>
			<div>
				<ImPriceTag />
				<p>
					<span>price category:</span> {priceCategory}
				</p>
			</div>
			<div>
				<ImLocation />
				<p>
					<span>location:</span> {location}
				</p>
			</div>
			<div>
				<BiMoney />
				<p>
					<span>price (day):</span> {costPerDay}
				</p>
			</div>
			<div>
				<BiGasPump />
				<p>
					<span>AFC (L/100km):</span> {avgConsumption}
				</p>
			</div>
			<div>
				<AiFillCar />
				<p>
					<span>available:</span> {carsAvailable}
				</p>
			</div>
		</CarCardWrapper>
	);
};

export default CarCard;
