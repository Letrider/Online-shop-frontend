import { useState } from 'react'
import { Footer } from '../../components/Footer/Footer'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import cn from './CartPage.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { InputCounter } from '../../components/InputCounter/InputCounter'
import { updateQuantity, removeFromCart } from '../../features/cart/cartSlice'
import { ButtonNavigation } from '../../components/ButtonNavigation/ButtonNavigation'
import { ButtonCard } from '../../components/ButtonCard/ButtonCard'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

export const CartPage = () => {
	const cartItems = useSelector(state => state.cart.items)
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { register, handleSubmit } = useForm()
	const [showModal, setShowModal] = useState(false)

	const handleQuantityChange = (id, quantity) => {
		if (quantity > 0) {
			dispatch(updateQuantity({ id, quantity }))
		}
	}

	const handleDeleteItem = id => {
		if (cartItems.length > 0) {
			dispatch(removeFromCart(id))
		}
	}

	const totalCartPrice = cartItems.reduce((total, item) => {
		const itemPrice = item.discountPrice ?? item.price
		return total + itemPrice * item.quantity
	}, 0)

	const handleToProducts = () => {
		navigate('/products')
	}

	const onSubmit = data => {
		// const { Name, Phone, Email } = data

		console.log(data)

		const fetchSendData = async () => {
			await axios.post('http://localhost:3333/order/send', data)
		}
		fetchSendData()
		setShowModal(true)
	}

	const handleCloseModal = () => {
		setShowModal(false)
	}
	return (
		<div className={cn.CartPage}>
			<NavigationBar />
			<div className={cn.CartHeader}>
				<h1>Shopping Cart</h1>

				<div className={cn.Right}>
					<div className={cn.Line} />
					<ButtonNavigation action={() => navigate('/products')}>
						Back to the store
					</ButtonNavigation>
				</div>
			</div>
			<div className={cn.Cart}>
				{cartItems.length === 0 ? (
					<div className={cn.EmptyCart}>
						<p>Looks like you have no items in your basket currently.</p>

						<div>
							<ButtonCard type='Primary' action={handleToProducts}>
								Continue Shopping
							</ButtonCard>
						</div>
					</div>
				) : (
					<>
						<div className={cn.CartItems}>
							{cartItems.map(item => (
								<div key={item.id} className={cn.CartItem}>
									<img
										src={`http://localhost:3333${item.image}`}
										alt={item.title}
										className={cn.ItemImage}
										onClick={() => {
											navigate(`/product/${item.id}`)
										}}
									/>
									<div className={cn.ItemInfo}>
										<div className={cn.ItemHeader}>
											<h1>{item.title}</h1>
											<div
												className={cn.Delete}
												onClick={() => handleDeleteItem(item.id)}
											/>
										</div>
										<div className={cn.CounterContainer}>
											<InputCounter
												value={item.quantity}
												onChange={value => handleQuantityChange(item.id, value)}
											/>
											{item.discountPrice ? (
												<>
													<h1 className={cn.DiscountPrice}>
														${item.discountPrice * item.quantity}
													</h1>
													<p className={cn.OriginalPrice}>
														${item.price * item.quantity}
													</p>
												</>
											) : (
												<h1 className={cn.Price}>
													${item.price * item.quantity}
												</h1>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
						<div className={cn.CartSummary}>
							<h1>Order details</h1>
							<p>{cartItems.length} items</p>
							<div className={cn.Container}>
								<p>Total</p>
								<h1>${totalCartPrice.toFixed(2)}</h1>
							</div>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className={cn.inputsContainer}
							>
								<Input placeholder='Name' register={() => register('Name')} />
								<Input
									placeholder='Phone number'
									register={() => register('Phone')}
								/>
								<Input placeholder='Email' register={() => register('Email')} />
								<ButtonCard type='Primary'>Order</ButtonCard>
							</form>
						</div>
					</>
				)}
			</div>
			{showModal && <SuccessModal onClose={handleCloseModal} />}
			<Footer />
		</div>
	)
}

const SuccessModal = ({ onClose }) => (
	<div className={cn.ModalOverlay}>
		<div className={cn.ModalContent}>
			<h1>Congratulations!</h1>
			<p>
				Your order has been successfully placed <br /> on the website.{' '}
			</p>
			<p>
				A manager will contact you shortly <br /> to confirm your order.
			</p>
			<div className={cn.Exit} onClick={onClose} />
		</div>
	</div>
)

const Input = ({ placeholder, register, type }) => {
	return (
		<input
			type={type}
			{...register(placeholder.toLowerCase())}
			className={cn.Input}
			placeholder={placeholder}
		/>
	)
}
