import { Link } from 'react-router-dom'
import cn from './Card.module.scss'

export const Card = ({
	id,
	categoryId,
	title,
	imagePath,
	type = 'Categories',
	price = 100,
	discountPrice = null,
}) => {
	const discount =
		discountPrice !== null
			? Math.round(((price - discountPrice) / price) * 100)
			: null

	return (
		<>
			{type === 'Categories' ? (
				<Link to={`/categories/${id}`} className={cn.Card}>
					<img src={imagePath} alt='' />
					<h1>{title}</h1>
				</Link>
			) : type === 'Sales' ? (
				<Link to={`/product/${id}`} className={cn.CardSale}>
					<img src={imagePath} alt='' />
					<h1>{title}</h1>
					<div className={cn.CardPrice}>
						<div className={cn.Line} />
						<h1>{`${discountPrice ?? price}$`}</h1>
						{discountPrice && <p className={cn.OldPrice}>${price}</p>}
					</div>
					{discount !== null && <div className={cn.Discount}>-{discount}%</div>}
				</Link>
			) : null}
		</>
	)
}
