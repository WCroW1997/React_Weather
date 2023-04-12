import React from 'react'
import styles from './module/WeatherInfo.module.css'

const WeatherInfo = () => {
	return (
		<div className={styles.weatherInfo}>
			<div className={styles.leftZone}>
				<div className=''>
					<h2>Prague</h2>
					<p>Chech Republic</p>
				</div>
				<div className=''>
					<h1>26°</h1>
					<p>
						Wind
						<span className={styles.info}> 4 km/h</span>
					</p>
					<p>
						Humidity
						<span className={styles.info}> 95 %</span>
					</p>
					<p>
						Chance of rain
						<span className={styles.info}> 95 %</span>
					</p>
				</div>
			</div>
			<img src='' alt='' />
		</div>
	)
}

export default WeatherInfo
