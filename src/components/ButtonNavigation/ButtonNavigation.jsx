import cn from './ButtonNavigation.module.scss'
import { Link } from 'react-router-dom'

export const ButtonNavigation = ({ children, href, action }) => {
	return (
		<Link to={href} onClick={action} className={cn.ButtonNavigation}>
			{children}
		</Link>
	)
}
