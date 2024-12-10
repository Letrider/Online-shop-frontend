import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import cn from './NavLink.module.scss'

export const NavLink = ({ title, link = '/' }) => {
	return (
		<Link to={link} className={cn.NavLink}>
			<h1 className={cn.Title}>{title}</h1>
		</Link>
	)
}
