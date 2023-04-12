import React from 'react'
import { BsGeoAlt } from 'react-icons/bs'
import { FaSearch } from 'react-icons/fa'
import styles from './HeaderForm.module.css'

const HeaderForm = () => {
	return (
		<form onSubmit={() => console.log('submit')} className={styles.form}>
			<label className={styles.label}>
				<input type='text' className={styles.input} placeholder='Search' />
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
