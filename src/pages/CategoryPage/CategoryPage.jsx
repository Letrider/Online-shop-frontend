import cn from './CategoryPage.module.scss'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import { Categories } from '../../components/Categories/Categories'
import { Footer } from '../../components/Footer/Footer'
import { CategoriesList } from '../../components/CategoriesList/CategoriesList'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
	const { categoryId } = useParams()

	return (
		<div className={cn.CategoriesPage}>
			<NavigationBar />
			<CategoriesList
				title={`Products with category: ${categoryId}`}
				categoryId={categoryId}
			/>
			<Footer />
		</div>
	)
}

export default CategoryPage
