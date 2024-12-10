import { Instagram } from '../Icons/Instagram/Instagram'
import Whatsapp from '../Icons/Whatsapp/Whatsapp'
import cn from './Footer.module.scss'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

export const Footer = () => {
	return (
		<div className={cn.Footer}>
			<h1>Contact</h1>
			<div className={cn.GridComplex}>
				<div className={cn.GridItem}>
					<p>Phone</p>
					<h1>+7 (499) 350-66-04</h1>
				</div>
				<div className={cn.GridItem}>
					<p>Socials</p>
					<div className={cn.Socials}>
						<Instagram />
						<Whatsapp />
					</div>
				</div>
				<div className={cn.GridItem}>
					<p>Address</p>
					<h1>Dubininskaya Ulitsa, 96, Moscow, Russia, 115093</h1>
				</div>
				<div className={cn.GridItem}>
					<p>Working Hours</p>
					<h1>24 hours a day</h1>
				</div>
			</div>
			<div className={cn.Map}>
				<YMaps>
					<Map
						className={cn.Map}
						defaultState={{
							center: [55.7296, 37.6242],
							zoom: 15,
						}}
						width='100%'
					>
						<Placemark geometry={[55.7296, 37.6242]} />
					</Map>
				</YMaps>
			</div>
		</div>
	)
}
