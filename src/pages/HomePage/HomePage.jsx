import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../features/categories/categoriesSlice'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import { Header } from '../../components/Header/Header'
import { Categories } from '../../components/Categories/Categories'
import cn from './HomePage.module.scss'
import { SaleWidget } from '../../widgets/Sale/Sale'
import { Footer } from '../../components/Footer/Footer'

const HomePage = () => {
	const dispatch = useDispatch()
	const categories = useSelector(state => state.categories.categories)

	useEffect(() => {
		dispatch(fetchCategories())
	}, [dispatch])

	return (
		<div className={cn.HomePage}>
			<NavigationBar />
			<Header />
			<Categories
				title='Categories'
				type='Categories'
				actionTitle='All categories'
				slidesToShow={4}
			/>
			<SaleWidget />
			<Categories
				title='Sales'
				type='Sales'
				actionTitle='All sales'
				slidesToShow={4}
			/>
			<Footer />
		</div>
	)
}

export default HomePage
