import carsData from "../../../utils/carsData";
import CarCard from "../components/CarCard/CarCard";
import { CarsGalleryWrapper } from "../CarsGallery.styled";
import BasePageLayout from "../../../layouts/BasePageLayout/BasePageLayout";

const CarsGallery = () => {
	return (
		<BasePageLayout>
			<CarsGalleryWrapper>
				<h1>rent a car</h1>
				<h2>select a car from the list below:</h2>
				<div className="carList">
					{carsData.map(car => {
						return (
							<CarCard
								key={car.id}
								id={car.id}
								carName={car.carName}
								location={car.location}
								priceCategory={car.priceCategory}
								costPerDay={car.costPerDay}
								avgConsumption={car.avgConsumption}
								carsAvailable={car.carsAvailable}
							/>
						);
					})}
				</div>
			</CarsGalleryWrapper>
		</BasePageLayout>
	);
};

export default CarsGallery;
