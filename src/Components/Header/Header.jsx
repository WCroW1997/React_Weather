import React from 'react'
import HeaderInfo from './HeaderInfo'
import HeaderForm from './HeaderForm'

import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderInfo />
			<HeaderForm />
		</header>
	)
}

export default Header
