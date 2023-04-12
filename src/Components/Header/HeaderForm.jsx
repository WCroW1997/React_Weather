import React, { useState } from 'react'
import { BsGeoAlt } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import styles from './HeaderForm.module.css'

const HeaderForm = ({ choiseCity }) => {
	const [city, setCity] = useState('')

	const onSubmitHandle = (e) => {
		e.preventDefault()
		choiseCity(city)
		setCity('')
	}

	return (
		<form onSubmit={onSubmitHandle} className={styles.form}>
			<label className={styles.label}>
				<input
					type='text'
					className={styles.input}
					placeholder='Search'
					value={city}
					onChange={(e) => setCity(e.target.value)}
				/>
				<button type='submit' className={styles.searchBtn}>
					<FaSearch size={16} />
				</button>
			</label>

			<button className={styles.geolocateBtn}>
				<BsGeoAlt /> Current
			</button>
		</form>
	)
}

export default HeaderForm
