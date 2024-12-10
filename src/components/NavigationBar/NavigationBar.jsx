import cn from './NavigationBar.module.scss'
import { Logotype } from '../Logo/Logo'
import { NavLink } from '../NavLink/NavLink'
import { ButtonCart } from '../ButtonCart/ButtonCart'

export const NavigationBar = () => {
	return (
		<div className={cn.Navigation}>
			<Logotype />
			<ul className={cn.LinksList}>
				<NavLink title='Main Page' link='/' />
				<NavLink title='Categories' link='/categories' />
				<NavLink title='All products' link='/products' />
				<NavLink title='All sales' link='/sales' />
			</ul>
			<ButtonCart />
		</div>
	)
}
