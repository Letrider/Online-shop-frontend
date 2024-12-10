import { ButtonCard } from '../../components/ButtonCard/ButtonCard'
import cn from './Sale.module.scss'
import { useForm } from 'react-hook-form'

export const SaleWidget = () => {
	const { register, handleSubmit } = useForm()

	const onSubmit = data => {
		console.log(data)
	}

	return (
		<div className={cn.Sale}>
			<h1>5% off on the first order</h1>
			<div className={cn.container}>
				<img src='/widgets/hands.png' alt='' />

				<form onSubmit={handleSubmit(onSubmit)} className={cn.inputsContainer}>
					<Input placeholder='Name' register={() => register('Name')} />
					<Input
						placeholder='Phone number'
						register={() => register('Phone')}
					/>
					<Input placeholder='Email' register={() => register('Email')} />
					<ButtonCard type='Discount'>Get a discount</ButtonCard>
				</form>
			</div>
		</div>
	)
}

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
