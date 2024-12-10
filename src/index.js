import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import store from './app/store'
import HomePage from './pages/HomePage/HomePage'
import './index.css'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import { ProductsPage } from './pages/ProductsPage/ProductsPage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { CartPage } from './pages/CartPage/CartPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import { SalesPage } from './pages/SalesPage/SalesPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'

createRoot(document.getElementById('root'))
  .render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:categoryId" element={<CategoryPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  )
