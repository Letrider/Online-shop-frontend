import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
	},
	reducers: {
		addToCart: (state, action) => {
			const item = action.payload
			const existingItem = state.items.find(i => i.id === item.id)
			if (existingItem) {
				existingItem.quantity += item.quantity
			} else {
				state.items.push(item)
			}
		},
		updateQuantity: (state, action) => {
			const { id, quantity } = action.payload
			const existingItem = state.items.find(i => i.id === id)
			if (existingItem) {
				existingItem.quantity = quantity
			}
		},
		removeFromCart: (state, action) => {
			state.items = state.items.filter(item => item.id !== action.payload)
		},
		clearCart: state => {
			state.items = []
		},
	},
})

export const { addToCart, updateQuantity, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
