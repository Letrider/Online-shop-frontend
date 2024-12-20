import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
	const response = await axios.get('http://localhost:3333/products/all')
	return response.data
})

const productsSlice = createSlice({
	name: 'products',
	initialState: { products: [], status: 'idle' },
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.status = 'loading'
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.products = action.payload
			})
			.addCase(fetchProducts.rejected, (state) => {
				state.status = 'failed'
			})
	},
})

export default productsSlice.reducer
