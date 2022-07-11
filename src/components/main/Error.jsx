import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
	const navigate = useNavigate()
	return (
		<div>
			<button onClick={() => navigate('/')}>Go to main page</button>
			Error
		</div>
	)
}

export default Error