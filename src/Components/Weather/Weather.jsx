import React from 'react'

import WeatherInfo from './WeatherInfo'
import WeatherTime from './WeatherTime'
import WeatherWeek from './WeatherWeek'

import styles from './module/Weather.module.css'

const Weather = (props) => {
	return (
		<div className={styles.weather}>
			<WeatherInfo
				name={props.name}
				temp={props.main.temp}
				wind={props.wind.speed}
				humidity={props.main.humidity}
				icon={props.weather[0].icon}
			/>
			<WeatherTime name={props.name} />
			<WeatherWeek />
		</div>
	)
}

export default Weather
