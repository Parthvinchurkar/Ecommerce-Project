import { createSlice } from "@reduxjs/toolkit"

const loadState = () => {
  try {
    const data = localStorage.getItem("cartState")
    return data ? JSON.parse(data) : { items: [], wishlist: [] }
  } catch {
    return { items: [], wishlist: [] }
  }
}

const saveState = (state) => {
  try {
    localStorage.setItem("cartState", JSON.stringify(state))
  } catch {}
}

const initialState = loadState()

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const existing = state.items.find(
        item => item.id === action.payload.id
      )

      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }

      saveState(state)
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      )
      saveState(state)
    },

    clearCart: (state) => {
      state.items = []
      saveState(state)
    },

    toggleWishlist: (state, action) => {
      const exists = state.wishlist.find(
        item => item.id === action.payload.id
      )

      if (exists) {
        state.wishlist = state.wishlist.filter(
          item => item.id !== action.payload.id
        )
      } else {
        state.wishlist.push(action.payload)
      }

      saveState(state)
    }

  }
})

export const {
  addToCart,
  removeFromCart,
  clearCart,
  toggleWishlist
} = cartSlice.actions

export default cartSlice.reducer