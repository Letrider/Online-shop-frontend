import { Footer } from '../../components/Footer/Footer'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import { ProductsList } from '../../components/ProductsList/ProductsList'
import cn from './SalesPage.module.scss'

export const SalesPage = () => {
	return (
		<div className={cn.SalesPage}>
			<NavigationBar />
			<ProductsList discounted />
			<Footer />
		</div>
	)
}
