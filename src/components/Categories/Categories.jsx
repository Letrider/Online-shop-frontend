import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories } from '../../features/categories/categoriesSlice'
import { fetchProducts } from '../../features/products/productsSlice'
import { ButtonNavigation } from '../ButtonNavigation/ButtonNavigation'
import cn from './Categories.module.scss'
import { Card } from './components/Card/Card'

export const Categories = ({
	title = 'Categories',
	type = 'Categories',
	haveAllBtn = true,
	actionTitle,
	action,
	slidesToShow = Infinity,
}) => {
	const dispatch = useDispatch()

	const categories = useSelector(state => state.categories.list)
	const products = useSelector(state => state.products.products)
	const loading = useSelector(state =>
		type === 'Categories'
			? state.categories.loading
			: state.products.status === 'loading'
	)

	useEffect(() => {
		if (type === 'Categories') {
			dispatch(fetchCategories())
		} else if (type === 'Sales') {
			dispatch(fetchProducts())
		}
	}, [dispatch, type])

	const renderData = () => {
		if (type === 'Categories') {
			return categories
				.slice(0, slidesToShow)
				.map((category, index) => (
					<Card
						key={`category-${index}`}
						id={index}
						title={category.title}
						imagePath={`http://localhost:3333${category.image}`}
						type={type}
					/>
				))
		}

		if (type === 'Sales') {
			return products
				.slice(0, slidesToShow)
				.map((product, index) => (
					<Card
						key={`sale-${index}`}
						id={index}
						title={product.title}
						categoryId={product.categoryId}
						imagePath={`http://localhost:3333${product.image}`}
						type={type}
						price={product.price}
						discountPrice={product.discont_price}
					/>
				))
		}

		return null
	}
	return (
		<div className={cn.Categories}>
			<div className={cn.CategoriesHeader}>
				<h1>{title}</h1>
				{haveAllBtn && (
					<div className={cn.Right}>
						<div className={cn.Line} />
						<ButtonNavigation action={action}>{actionTitle}</ButtonNavigation>
					</div>
				)}
			</div>
			<ul className={cn.CardsList}>
				{loading ? <h1>Loading...</h1> : renderData()}
			</ul>
		</div>
	)
}
