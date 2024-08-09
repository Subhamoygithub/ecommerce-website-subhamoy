import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const Cartslice =  createSlice({

    name :"Cart",
    initialState:{
        cart :  JSON.parse(localStorage.getItem('cart')) ?? [],
        total :0,
        totalItems :0,
    },
    reducers : {
        addToCart :(state,action) => {
            const item = action.payload
            const inCart = state.cart.find(cartItem => cartItem.id === item.id)
            if (inCart) {
                state.cart = state.cart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, qty: cartItem.qty + 1 }
                        : cartItem
                );
            } else {
                state.cart = [...state.cart, { ...item, qty: 1 }];
            }
            state.totalItems++
            state.total = state.cart.reduce((acc, item) => acc + (item.price * item.qty), 0)
            localStorage.setItem("cart", JSON.stringify(state.cart))
            localStorage.setItem("total", JSON.stringify(state.total))
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems))
            toast.success("Item added to cart")
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
          },

        removeFromCart: (state, action) => {
            const item = action.payload;

            console.log(item);

            const inCart = state.cart.find(cartItem => cartItem.id === item.id);

            if (inCart) {
                state.cart = state.cart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, qty: cartItem.qty - 1 }
                        : cartItem
                )
                state.cart = state.cart.filter(cartItem => cartItem.qty > 0);

                state.totalItems--;
                state.total -= inCart.price;
                // state.total = state.cart.reduce((acc, item) => acc - (item.price * item.qty), 0)
                

                localStorage.setItem("cart", JSON.stringify(state.cart));
                localStorage.setItem("total", JSON.stringify(state.total));
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
                toast.success("Item removed from cart");
            }
            if(state.cart.length === 0) {
                state.total = 0
                state.totalItems = 0
                localStorage.setItem("cart", JSON.stringify(state.cart));
                localStorage.setItem("total", JSON.stringify(state.total));
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
            }

          
        },
        resetCart: (state) => {
            state.cart = []
            state.total = 0
            state.totalItems = 0
            localStorage.removeItem('cart')
            localStorage.removeItem('total')
            localStorage.removeItem('totalItems')
            toast.success("Thanku for shopping with us ")
        },

    }
    
})
export const {addToCart,removeFromCart,removeItem,resetCart} = Cartslice.actions