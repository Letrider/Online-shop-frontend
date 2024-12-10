import cn from './CategoriesPage.module.scss'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import { Categories } from '../../components/Categories/Categories'
import { Footer } from '../../components/Footer/Footer'

const CategoriesPage = () => {
	return (
		<div className={cn.CategoriesPage}>
			<NavigationBar />
			<Categories title='Categories' type='Categories' haveAllBtn={false} />
			<Footer />
		</div>
	)
}

export default CategoriesPage
