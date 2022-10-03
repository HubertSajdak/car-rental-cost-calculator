import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Calculator from "./features/Calculator/views/Calculator";
import CarsGallery from "./features/CarsGallery/views/CarsGallery";
import { theme } from "./styles/theme";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/cars" element={<CarsGallery />} />
					<Route path="/cars/:carID" element={<Calculator />} />
					<Route path="*" element={<Navigate to="/cars" />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
