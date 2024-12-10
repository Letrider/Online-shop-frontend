import React from 'react'
import Logo from '../../assets/logo.svg'
import cn from './Logo.module.scss'

export const Logotype = () => {
	return <img src={Logo} className={cn.Logo} alt='Logotype' />
}
