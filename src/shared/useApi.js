import axios from 'axios';
import { useState, useEffect } from 'react';

export default function useApi() {
	const [ isloading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);
	const [ data, setData ] = useState(null);

	useEffect(() => {
		setError(null);
		setIsLoading(true);

		axios
			.get('https://mocki.io/v1/bc43542c-ef01-4b6b-9cf0-67710f3f371c')
			.then((res) => {
				setData(res.data.data);
				setIsLoading(false);
			})
			.catch((e) => {
				setError(true);
				setIsLoading(false);
			});
	}, []);

	return [ data, isloading, error ];
}
