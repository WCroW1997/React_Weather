import React, { useEffect, useState } from 'react'

import styles from './module/WeatherTime.module.css'
import WeatherHours from './WeatherHours'
import apiConfig from '../../api/apiConfig'

const WeatherTime = ({ name }) => {
	const [data, setData] = useState('London')
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch(apiConfig.apiHours_url(name, apiConfig.apiKey))
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => setError(error.message))
			.finally(() => setIsLoading(false))
	}, [name])

	console.log(data)
	return (
		<div className={styles.zones}>
			<WeatherHours />
			<WeatherHours />
			<WeatherHours />
			<WeatherHours />
			<WeatherHours />
			<WeatherHours />
			<WeatherHours />
			<WeatherHours />
			<WeatherHours />
			<WeatherHours />
			<WeatherHours />
			<WeatherHours />
		</div>
	)
}

export default WeatherTime
