import cn from './CategoriesList.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/products/productsSlice'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Card } from '../Categories/components/Card/Card'

export const CategoriesList = ({
	title = 'Products with Category',
	discounted,
	categoryId,
}) => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.products.products)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	const filteredProducts = products.filter(product => {
		return product.categoryId === Number(categoryId)
	})

	console.log(products)

	return (
		<div className={cn.ProductsList}>
			<h1>{title}</h1>
			<div className={cn.Products}>
				{filteredProducts.map((product, index) => (
					<Card
						key={index}
						id={product.id}
						title={product.title}
						type='Sales'
						discountPrice={product.discont_price}
						price={product.price}
						imagePath={'http://localhost:3333' + product.image}
					/>
				))}
			</div>
		</div>
	)
}
