import React from 'react'
import styles from './HeaderInfo.module.css'
const HeaderInfo = () => {
	return (
		<div>
			<div className={styles.headerLogo}>Weather Forecast</div>
			<div className={styles.headerDate}>12/12/23</div>
		</div>
	)
}

export default HeaderInfo
