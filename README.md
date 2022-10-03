# Rental Cost Calculator

Rental cost calculator is an app to calculate the cost of renting a car.

Due to lack of free gas prices APIs available I decided to use random number generator API that returns a random number form 3 to 5 for each request. This number is a fake representation of the gas price.

After you choose a car you will be navigated to the calculator page with currently selected car information.

Car info like: price category, cost per day, average fuel consumption and number of cars available are required to properly calculate the rental cost.

Total cost consists of:

- Base cost with fees = price/day x rental days x price category multiplier. If user has a little experience as a driver, then he/she is charged additional 20% of a base cost. Also If there are few vehicles available we charge another fee of 15% of a base cost,

- Fuel cost = (user's expected distance / 100km) x average car's fuel consumption per 100km x current gas price

- Netto cost = base cost with fees + fuel cost,

- Brutto cost = netto cost x 1.23.

User has to pass additional information to properly calculate the rental cost such as:

- expected distance that user will travel by car,

- since which year the user has held a driving license,

- car pick-up date,

- car drop-off date.

I also implemented a validation for these input fields.

## Live

[Live-Build](https://car-rental-calculator.netlify.app)