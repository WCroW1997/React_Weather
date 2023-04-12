import React from 'react'

import WeatherInfo from './WeatherInfo'
import WeatherTime from './WeatherTime'
import WeatherWeek from './WeatherWeek'
import styles from './module/Weather.module.css'

const Weather = () => {
	return (
		<div className={styles.weather}>
			<WeatherInfo />
			<WeatherTime />
			<WeatherWeek />
		</div>
	)
}

export default Weather
