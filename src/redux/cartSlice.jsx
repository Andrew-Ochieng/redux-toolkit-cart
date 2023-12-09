import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartProductIds: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.cartProductIds = [action.payload, ...state.cartProductIds]
        },
        removeFromCart: (state, action) => {
            state.cartProductIds = state.cartProductIds.filter((id) => id !== action.payload)
        },
        clearAllItems: (state) => {
            state.cartProductIds = []
        }
    },

    // Add the serialize option to exclude non-serializable action creator
    serialize: {
        reducers: ['addToCart', 'removeFromCart', 'clearAllItems'],
    },
})


export const { addToCart, removeFromCart, clearAllItems } = cartSlice.actions
export default cartSlice.reducer;
