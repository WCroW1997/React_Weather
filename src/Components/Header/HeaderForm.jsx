import React from 'react'

const HeaderForm = () => {
	return (
		<form onSubmit={console.log('submit')}>
			<input type='text' />
			<button type='submit'>Submit</button>
			<button className='geolocate'>Geolocate</button>
		</form>
	)
}

export default HeaderForm
