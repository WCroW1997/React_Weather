import React from 'react'

import styles from './module/WeatherDays.module.css'
const WeatherDays = () => {
	return (
		<div className={styles.card}>
			<h3 className={styles.title}>Friday 14.04</h3>
			<img src='' alt='' />
			<footer className={styles.footer}>
				<p>34°</p>
				<p className={styles.gray}>16°</p>
			</footer>
		</div>
	)
}

export default WeatherDays
