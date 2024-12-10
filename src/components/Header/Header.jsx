import cn from './Header.module.scss'
import image1 from '../../assets/image.png'
import { ButtonCard } from '../ButtonCard/ButtonCard'

export const Header = () => {
	return (
		<div className={cn.Header}>
			<img src={image1} alt='' />
			<div className={cn.container}>
				<h1>
					Amazing Discounts <br />
					on Garden Products!
				</h1>
				<div className={cn.ButtonContainer}>
					<ButtonCard type='Primary'>Check out</ButtonCard>
				</div>
			</div>
		</div>
	)
}
