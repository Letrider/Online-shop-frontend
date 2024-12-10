import React from 'react'
import cn from './ButtonCard.module.scss'

export const ButtonCard = ({ children, type, action }) => {
	const className =
		cn.ButtonCard +
		' ' +
		(type === 'Primary'
			? cn.Primary
			: type === 'Secondary'
			? cn.Secondary
			: type === 'Discount'
			? cn.Discount
			: null)

	return (
		<button className={className} onClick={action}>
			{children}
		</button>
	)
}
