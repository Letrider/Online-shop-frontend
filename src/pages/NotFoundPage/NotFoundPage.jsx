import { Footer } from '../../components/Footer/Footer'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import cn from './NotFoundPage.module.scss'
import { ButtonCard } from '../../components/ButtonCard/ButtonCard'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {
	const navigate = useNavigate()

	return (
		<div className={cn.NotFoundPage}>
			<NavigationBar />
			<div className={cn.NotFound}>
				<img src={'/404.png'} className={cn.FourZeroFour} alt='' />
				<div className={cn.TextContainer}>
					<h1>Page Not Found</h1>
					<p>
						We’re sorry, the page you requested could not be found. Please go
						back to the homepage.
					</p>
				</div>
				<div className={cn.ButtonContainer}>
					<ButtonCard type='Primary' action={navigate('/')}>
						Go Home
					</ButtonCard>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default NotFoundPage
