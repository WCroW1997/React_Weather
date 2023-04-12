import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Weather from './Components/Weather/Weather'
import apiConfig from './api/apiConfig'
function App() {
	const [data, setData] = useState('')
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	const [cityName, setCityName] = useState('London')
	useEffect(() => {
		fetch(apiConfig.api_url(cityName, apiConfig.apiKey))
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => setError(error.message))
			.finally(() => setIsLoading(false))
	}, [cityName])

	const choiseCityHandle = (city) => {
		setCityName(city)
	}

	// let {
	// 	name,
	// 	weather,
	// 	main: { humidity, temp, temp_max, temp_min },
	// 	wind: { speed },
	// } = data

	if (error) {
		return <h1 h1> Error: {error}</h1>
	}

	return (
		<div className='App'>
			<Header choiseCity={choiseCityHandle} />
			{isLoading ? <h1>Loading...</h1> : <Weather {...data} />}
		</div>
	)
}

export default App
