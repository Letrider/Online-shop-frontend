import cn from './ProductPage.module.scss'
import { useEffect, useState } from 'react'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import { Footer } from '../../components/Footer/Footer'
import { Link, useParams } from 'react-router-dom'
import { ButtonCard } from '../../components/ButtonCard/ButtonCard'
import { InputCounter } from '../../components/InputCounter/InputCounter'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../features/cart/cartSlice'

export const ProductPage = () => {
	const [product, setProduct] = useState(null)
	const [quantity, setQuantity] = useState(1)
	const { id } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await fetch(`http://localhost:3333/products/${id}`)
				const data = await response.json()
				setProduct(...data)
			} catch (error) {
				console.error('Error fetching product:', error)
			}
		}
		fetchProduct()
	}, [id])

	if (!product) {
		return (
			<div className={cn.ProductPage}>
				<NavigationBar />
				<div className={cn.Product}>
					<div className={cn.LoadImage} />
				</div>
				<Footer />
			</div>
		)
	}

	const discount =
		product.discont_price !== null
			? Math.round(
					((product.price - product.discont_price) / product.price) * 100
			  )
			: null

	const handleAddToCart = () => {
		console.log(product)
		const cartItem = {
			id: product.id,
			title: product.title,
			price: product.price,
			discountPrice: product.discont_price,
			discount: discount,
			image: product.image,
			quantity: quantity,
			setQuantity: () => setQuantity(quantity + 1),
		}

		dispatch(addToCart(cartItem))
	}

	return (
		<div className={cn.ProductPage}>
			<NavigationBar />
			<div className={cn.Product}>
				<img
					src={`http://localhost:3333${product.image}`}
					alt={product.title}
				/>

				<div className={cn.ProductInfo}>
					<h1>{product.title}</h1>

					<div className={cn.ProductPrice}>
						<h1>${product.discont_price ?? product.price}</h1>
						{product.discont_price && (
							<>
								<p>${product.price}</p>
								<div className={cn.Discount}>
									<div>-{discount}%</div>
								</div>
							</>
						)}
					</div>

					<div className={cn.AddToCart}>
						<InputCounter
							value={quantity}
							onChange={value => setQuantity(value)}
						/>
						<ButtonCard type='Primary' action={handleAddToCart}>
							Add to cart
						</ButtonCard>
					</div>

					<div className={cn.Description}>
						<h1>Description</h1>
						<p>{product.description}</p>
						<Link className={cn.ReadMore} to='#'>
							Read more
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
