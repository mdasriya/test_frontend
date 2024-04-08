import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-hot-toast"

const initialState = {
  cartData: localStorage.getItem("cartData")
    ? JSON.parse(localStorage.getItem("cartData"))
    : [],
  total: localStorage.getItem("total")
    ? JSON.parse(localStorage.getItem("total"))
    : 0,
  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
  cartOpen: false,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const index = state.cartData.findIndex((item) => item._id === product._id)

      if (index >= 0) {
        // If the product is already in the cart, do not modify the quantity
        toast.error("Product Already In Cart")
        return
      }
      // If the product is not in the cart, add it to the cart
      state.cartData.push(product)
      // Update the total quantity and price
      state.totalItems++
      state.total += product.price
      // Update to localstorage
      localStorage.setItem("cartData", JSON.stringify(state.cartData))
      localStorage.setItem("total", JSON.stringify(state.cartData.length))
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
      // show toast
      toast.success("Product Added To Cart")
    },
    removeFromCart: (state, action) => {
      const product = action.payload
      const index = state.cartData.findIndex((item) => item._id === product._id)
      // console.log("removeProduct function called", index);
      if (index >= 0) {
        // If the product is found in the cart, remove it
        state.totalItems--
        state.total -= state.cartData[index].price
        state.cartData.splice(index, 1)
        // Update to localstorage
        localStorage.setItem("cartData", JSON.stringify(state.cartData))
        localStorage.setItem("total", JSON.stringify(state.total))
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
        // show toast
        toast.success("Product Removed From CartData")
      }
    },
    resetCart: (state) => {
      state.cartData = []
      state.total = 0
      state.totalItems = 0
      // Update to localstorage
      localStorage.removeItem("cartData")
      localStorage.removeItem("total")
      localStorage.removeItem("totalItems")
    },

    setCartOpen : (state) => {
      state.cartOpen = true;
    },
    setCartClose : (state) => {
      state.cartOpen = false;
    },
  },
})

export const { addToCart, removeFromCart, resetCart, setCartOpen, setCartClose } = cartSlice.actions

export default cartSlice.reducer
