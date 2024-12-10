import cn from './ProductsList.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/products/productsSlice'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Card } from '../Categories/components/Card/Card'

export const ProductsList = ({ title = 'All products', discounted }) => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.products.products)

	const { register, watch } = useForm({
		defaultValues: {
			priceFrom: '',
			priceTo: '',
			discounted: discounted ? true : false,
			sortBy: 'default',
		},
	})

	const filters = watch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	const filteredProducts = products
		.filter(product => {
			const price = product.price
			const fromValid = filters.priceFrom ? price >= filters.priceFrom : true
			const toValid = filters.priceTo ? price <= filters.priceTo : true
			const discountedValid = filters.discounted
				? product.discont_price > 0
				: true

			return fromValid && toValid && discountedValid
		})
		.sort((a, b) => {
			if (filters.sortBy === 'newest') {
				return new Date(b.created_at) - new Date(a.created_at)
			} else if (filters.sortBy === 'price-high-low') {
				return b.price - a.price
			} else if (filters.sortBy === 'price-low-high') {
				return a.price - b.price
			}
			return 0
		})

	console.log(products)

	return (
		<div className={cn.ProductsList}>
			<h1>{filters.discounted ? 'Discounted items' : title}</h1>
			<form className={cn.Filter}>
				<div className={cn.FilterPrice}>
					<label>Price:</label>
					<input type='number' placeholder='from' {...register('priceFrom')} />
					<input type='number' placeholder='to' {...register('priceTo')} />
				</div>

				{!discounted && (
					<div className={cn.FilterDiscounted}>
						<label>
							Discounted items:
							<input type='checkbox' {...register('discounted')} />
						</label>
					</div>
				)}

				<div className={cn.FilterSort}>
					<label>Sort by:</label>
					<select {...register('sortBy')}>
						<option value='default'>by default</option>
						<option value='newest'>newest</option>
						<option value='price-high-low'>price: high to low</option>
						<option value='price-low-high'>price: low to high</option>
					</select>
				</div>
			</form>

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
