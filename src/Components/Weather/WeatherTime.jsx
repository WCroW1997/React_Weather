import React from 'react'

import styles from './module/WeatherTime.module.css'
import WeatherHours from './WeatherHours'

const WeatherTime = () => {
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
