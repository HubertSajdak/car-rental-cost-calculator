import "styled-components";
// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		palette: {
			red: string;
			whitesmoke: string;
			white: string;
			black: string;
			warning: string;
			grey: string;
		};
		shadows: {
			1: string;
			2: string;
			3: strint;
			4: string;
		};
	}
}
