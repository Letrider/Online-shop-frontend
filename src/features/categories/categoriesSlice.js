import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCategories = createAsyncThunk(
	'categories/fetchCategories',
	async () => {
		const response = await axios.get('http://localhost:3333/categories/all')
		return response.data
	}
)

const categoriesSlice = createSlice({
	name: 'categories',
	initialState: { list: [], loading: false },
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategories.pending, (state) => {
				state.loading = true
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.loading = false
				state.list = action.payload
			})
			.addCase(fetchCategories.rejected, (state) => {
				state.loading = false
			})
	},
})

export default categoriesSlice.reducer
