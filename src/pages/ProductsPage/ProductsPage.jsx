import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../../features/products/productsSlice'
import { Categories } from '../../components/Categories/Categories'
import cn from './ProductsPage.module.scss'
import { NavigationBar } from '../../components/NavigationBar/NavigationBar'
import { Footer } from '../../components/Footer/Footer'
import { ProductsList } from '../../components/ProductsList/ProductsList'

export const ProductsPage = () => {
	return (
		<div className={cn.ProductsPage}>
			<NavigationBar />
			<ProductsList />
			<Footer />
		</div>
	)
}
