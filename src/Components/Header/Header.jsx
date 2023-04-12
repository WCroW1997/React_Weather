import React from 'react'
import HeaderInfo from './HeaderInfo'
import HeaderForm from './HeaderForm'

import styles from './Header.module.css'

const Header = ({ choiseCity }) => {
	return (
		<header className={styles.header}>
			<HeaderInfo />
			<HeaderForm choiseCity={choiseCity} />
		</header>
	)
}

export default Header
