import React from 'react'
import styles from './module/WeatherInfo.module.css'

const WeatherInfo = ({ name, temp, wind, humidity }) => {
	return (
		<div className={styles.weatherInfo}>
			<div className={styles.leftZone}>
				<div className=''>
					<h2 className={styles.title}>{name}</h2>
				</div>
				<div className=''>
					<h1>{Math.floor(temp)}°</h1>
					<p>
						Wind
						<span className={styles.info}> {wind} km/h</span>
					</p>
					<p>
						Humidity
						<span className={styles.info}> {humidity} %</span>
					</p>
				</div>
			</div>
			<img src='' alt='' />
		</div>
	)
}

export default WeatherInfo
