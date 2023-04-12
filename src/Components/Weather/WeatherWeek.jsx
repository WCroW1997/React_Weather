import React from 'react'
import WeatherDays from './WeatherDays'

import styles from './module/WeatherWeek.module.css'
const WeatherWeek = () => {
	return (
		<div className={styles.week}>
			<h2>Weekly forecast</h2>
			<div className={styles.zones}>
				<WeatherDays />
				<WeatherDays />
				<WeatherDays />
				<WeatherDays />
				<WeatherDays />
				<WeatherDays />
			</div>
		</div>
	)
}

export default WeatherWeek
