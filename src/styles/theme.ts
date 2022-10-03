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
		3: string;
		4: string;
	};
}
export const theme: DefaultTheme = {
	palette: {
		red: "#ff4605",
		whitesmoke: "#f2f5fb",
		white: "#ffff",
		black: "#222732",
		warning: "#ff9800",
		grey: "#bdbdbd",
	},
	shadows: {
		1: "1px 1px 0 0 rgb(196 196 196 / 24%)",
		2: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
		3: "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
		4: "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
	},
};
