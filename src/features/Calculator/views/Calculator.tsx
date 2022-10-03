import { RiPinDistanceFill } from "react-icons/ri";
import { AiFillIdcard, AiFillCalendar, AiFillWarning, AiFillCar } from "react-icons/ai";
import { ImPriceTag, ImLocation } from "react-icons/im";
import { BiMoney, BiGasPump } from "react-icons/bi";
import TextField from "../../../components/TextField/TextField";
import { CalculatorWrapper } from "../Calculator.styled";
import CalculatorResult from "../components/CalculatorResult/CalculatorResult";
import { GrReturn } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import carsData from "../../../utils/carsData";
import InspectedCarInfo from "../components/InspectedCarInfo/InspectedCarInfo";
import CalculatorWarning from "../components/CalculatorWarning/CalculatorWarning";
import LoadingScreen from "../../../components/LoadingScreen/LoadingScreen";
import BasePageLayout from "../../../layouts/BasePageLayout/BasePageLayout";
import { useFetch } from "../../../common/useFetch";
import useInputValidation from "../../../common/useInputValidation";

export interface PriceCateogryOptionsValues {
	basic: number;
	standard: number;
	medium: number;
	premium: number;
}
export interface GasInfoStateValues {
	isLoading: boolean;
	isError: boolean;
	data: number | null;
}

const priceCategoryOptions: PriceCateogryOptionsValues = {
	basic: 1,
	standard: 1.3,
	medium: 1.6,
	premium: 2,
};

const Calculator = () => {
	const params = useParams();
	const inspectedCar = carsData.find(car => `${car.id}` === params.carID);

	const currentYear = new Date().getFullYear();

	const currentFullDate = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
		.toISOString()
		.split("T")[0];

	const {
		data: gasPrice,
		isError: isGasPriceError,
		isLoading: isGasPriceLoading,
	}: GasInfoStateValues = useFetch("https://www.randomnumberapi.com/api/v1.0/random?min=3&max=5&count=1");

	const {
		value: expectedDistanceValue,
		hasError: expectedDistanceHasError,
		isValid: expectedDistanceIsValid,
		valueChangeHandler: expectedDistanceChangeHandler,
		inputBlurHandler: expectedDistanceBlurHandler,
	} = useInputValidation(
		validateValue => validateValue.toString().length > 0 && validateValue.toString().charAt(0) !== "0",
		100
	);
	const {
		value: licenseIssuedYearValue,
		hasError: licenseIssuedYearHasError,
		isValid: licenseIssuedYearIsValid,
		valueChangeHandler: licenseIssuedYearChangeHandler,
		inputBlurHandler: licenseIssuedYearBlurHandler,
	} = useInputValidation(
		validateValue => validateValue.toString().length === 4 && validateValue <= currentYear,
		currentYear
	);
	const {
		value: rentalTimeFromValue,
		isValid: rentalTimeFromIsValid,
		valueChangeHandler: rentalTimeFromChangeHandler,
		inputBlurHandler: rentalTimeFromBlurHandler,
	} = useInputValidation(validateValue => validateValue >= currentFullDate, currentFullDate);
	const {
		value: rentalTimeToValue,
		hasError: rentalTimeToHasError,
		isValid: rentalTimeToIsValid,
		isTouched: rentalTimeToIsTouched,
		valueChangeHandler: rentalTimeToChangeHandler,
		inputBlurHandler: rentalTimeToBlurHandler,
	} = useInputValidation(validateValue => validateValue > rentalTimeFromValue, currentFullDate);

	if (!inspectedCar) {
		return <LoadingScreen title="Could not fetch the car data." />;
	}

	if (isGasPriceLoading) {
		return <LoadingScreen title="Fetching gas price data..." />;
	}

	if ((!isGasPriceLoading && isGasPriceError) || !gasPrice) {
		return (
			<LoadingScreen title="Could not fetch the gas price data. Return to the previous page or try to refresh the page." />
		);
	}
	const { carName, priceCategory, location, costPerDay, avgConsumption, carsAvailable } = inspectedCar;

	const calculateRentalDays = (pickUpDate: string, dropOffDate: string) => {
		const rentalTimeFrom = new Date(pickUpDate);
		const rentalTimeTo = new Date(dropOffDate);
		const time = Math.abs(Number(rentalTimeTo) - Number(rentalTimeFrom));
		const rentalDays = Math.ceil(time / (1000 * 60 * 60 * 24));
		return rentalDays;
	};

	const rentalDays = calculateRentalDays(rentalTimeFromValue.toString(), rentalTimeToValue.toString());

	const priceCategoryMultiplier = priceCategoryOptions[priceCategory as keyof typeof priceCategoryOptions];

	const baseCost = costPerDay * rentalDays * priceCategoryMultiplier;
	const driverYearsOfExp = currentYear - +licenseIssuedYearValue;

	const calculateFee = (baseCost: number, driverYearsOfExp: number, carsAvailable: number) => {
		let baseCostWithFee = baseCost;

		if (driverYearsOfExp < 5) {
			baseCostWithFee *= 1.2;
		}
		if (carsAvailable < 3) {
			baseCostWithFee *= 1.15;
		}
		return baseCostWithFee;
	};
	const baseCostWithFee = calculateFee(baseCost, driverYearsOfExp, carsAvailable);

	const fuelCost = (+expectedDistanceValue / 100) * avgConsumption * gasPrice;

	const nettoCost = baseCostWithFee + fuelCost;

	const bruttoCost = nettoCost * 1.23;

	return (
		<BasePageLayout>
			<CalculatorWrapper>
				<Link to="/cars" className="returnBtn">
					<GrReturn />
					back
				</Link>
				<h1>Rental cost calculator</h1>
				<div className="carInfo">
					<h3>car info:</h3>
					<InspectedCarInfo title="car" value={carName} icon={<AiFillCar />} />
					<InspectedCarInfo title="price category" value={priceCategory} icon={<ImPriceTag />} />
					<InspectedCarInfo title="location" value={location} icon={<ImLocation />} />
					<InspectedCarInfo title="cost per day" value={costPerDay} icon={<BiMoney />} />
					<InspectedCarInfo title="AFC (L/100km)" value={avgConsumption} icon={<BiGasPump />} />
					<InspectedCarInfo title="cars available" value={carsAvailable} icon={<AiFillCar />} />
				</div>
				<div className="gasPrice">
					<BiGasPump />
					<h3>
						<span>current gas price ($):</span> {gasPrice}
					</h3>
				</div>
				<div className="inputsArea">
					<TextField
						labelText="Expected distance (km)"
						type="number"
						icon={<RiPinDistanceFill />}
						name="expectedDistance"
						value={expectedDistanceValue}
						handleChange={expectedDistanceChangeHandler}
						onBlur={expectedDistanceBlurHandler}
						minLength={1}
						maxLength={5}
						min={1}
						max={99999}
						required
						placeholder="100"
						error={expectedDistanceHasError ? "Enter correct distance" : ""}
						onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
							if (e.key === "-" || e.key === "e" || e.key === "," || e.key === ".") {
								e.preventDefault();
							}
						}}
					/>

					<TextField
						labelText="Driving license year of issue"
						type="number"
						icon={<AiFillIdcard />}
						name="licenseIssuedYear"
						value={licenseIssuedYearValue}
						handleChange={licenseIssuedYearChangeHandler}
						onBlur={licenseIssuedYearBlurHandler}
						minLength={4}
						maxLength={4}
						min={0}
						max={currentYear}
						pattern={"[0-9]{4}"}
						required
						placeholder={`yyyy`}
						error={licenseIssuedYearHasError ? "Enter correct date" : ""}
						onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
							if (e.key === "-" || e.key === "e" || e.key === "," || e.key === ".") {
								e.preventDefault();
							}
						}}
					/>

					<TextField
						labelText="Pick-up date"
						type="date"
						icon={<AiFillCalendar />}
						name="rentalTimeFrom"
						value={rentalTimeFromValue}
						handleChange={rentalTimeFromChangeHandler}
						onBlur={rentalTimeFromBlurHandler}
						min={currentFullDate}
						required
						onKeyDown={(e: React.SyntheticEvent) => e.preventDefault()}
					/>
					<TextField
						labelText="Drop-off date"
						type="date"
						icon={<AiFillCalendar />}
						name="rentalTimeTo"
						value={rentalTimeToValue}
						handleChange={rentalTimeToChangeHandler}
						onBlur={rentalTimeToBlurHandler}
						min={rentalTimeFromValue}
						required
						helperText={!rentalTimeToIsTouched ? "Drop-off date should be different." : ""}
						error={rentalTimeToHasError ? "Enter correct date" : ""}
						onKeyDown={(e: React.SyntheticEvent) => e.preventDefault()}
					/>
				</div>
				{driverYearsOfExp < 5 && !(driverYearsOfExp < 3 && priceCategory === "premium") && (
					<CalculatorWarning
						icon={<AiFillWarning />}
						msg={"Due to your little experience as a driver, we charge additional 20% of your base price."}
						variant={"warning"}
					/>
				)}
				{carsAvailable < 3 && !(driverYearsOfExp < 3 && priceCategory === "premium") && (
					<CalculatorWarning
						icon={<AiFillWarning />}
						msg={"Due to the small number of cars available, we charge additional 15% of your base price."}
						variant={"warning"}
					/>
				)}
				<div className="resultsArea">
					{driverYearsOfExp < 3 && priceCategory === "premium" ? (
						<CalculatorWarning
							icon={<AiFillWarning />}
							msg={"We are sorry, but due to your little experience as a driver you can not rent this car."}
							variant={"error"}
						/>
					) : (
						<>
							{expectedDistanceIsValid && licenseIssuedYearIsValid && rentalTimeFromIsValid && rentalTimeToIsValid ? (
								<>
									<CalculatorResult title="Price / day" price={costPerDay} />
									<CalculatorResult title="Rental days" multiplier={rentalDays} />
									<CalculatorResult title="Category multiplier" multiplier={priceCategoryMultiplier} />
									<CalculatorResult title="Base cost" price={baseCost} />
									<CalculatorResult title="Base cost w/ fees" price={baseCostWithFee} />
									<CalculatorResult title="Fuel cost" price={fuelCost} />
									<CalculatorResult title="Netto cost" price={nettoCost} />
									<CalculatorResult title="Brutto cost" price={bruttoCost} total />
								</>
							) : (
								<>
									<CalculatorWarning
										icon={<AiFillWarning />}
										msg={"Please, fill out all the inputs."}
										variant={"warning"}
									/>
								</>
							)}
						</>
					)}
				</div>
			</CalculatorWrapper>
		</BasePageLayout>
	);
};

export default Calculator;
