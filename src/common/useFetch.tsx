import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
	const [data, setData] = useState<T | null>(null);
	const [isError, setIsError] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		const getData = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(url);
				const data = await res.json();
				setData(data);
				setIsLoading(false);
			} catch (err) {
				setIsError(true);
				setIsLoading(false);
			}
		};
		getData();
	}, [url]);

	return { data, isError, isLoading };
}
