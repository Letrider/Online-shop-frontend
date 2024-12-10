import cn from './InputCounter.module.scss'

export const InputCounter = ({ value, onChange }) => {
	const increment = () => onChange(value + 1)
	const decrement = () => onChange(value - 1 > 0 ? value - 1 : 1)

	return (
		<div className={cn.InputCounter}>
			<button
				onClick={decrement}
				className={cn.Button}
				disabled={value === 1}
			></button>
			<div>{value}</div>
			<button onClick={increment} className={cn.Button}></button>
		</div>
	)
}
