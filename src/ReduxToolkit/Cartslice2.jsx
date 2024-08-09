// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart : [],
//   totalQuantity : 0,
//   totalPrice : 0,
 
// }

// export const Addcart = createSlice({
//     name :"cart",
//     initialState,
//     reducers:{
//         addToCart : (state,action)=>{
//             let find = state.cart.findIndex((item)=> item.id === action.payload.id)
//             if(find >= 0){
//                 state.cart[find].id += 1;
//             }else{
//                 state.cart.push(action.payload)
//             }
           
//         },
      
//     getCartTotal: (state) => {
//         let { totalQuantity, totalPrice } = state.cart.reduce(
//           (cartTotal, cartItem) => {
//             console.log("carttotal", cartTotal);
//             console.log("cartitem", cartItem);
//             const { price, id } = cartItem;
//             console.log("subha", id);
//             const itemTotal = price * id;
//             cartTotal.totalPrice += itemTotal;
//             cartTotal.totalQuantity += id;
//             return cartTotal;
//           },
//           {
//             totalPrice: 0,
//             totalQuantity: 0,
//           }
//         );
//         state.totalPrice = totalPrice;
//         state.totalQuantity = totalQuantity;
//       },
//         removeItem : (state,action) =>{
//             state.cart = state.cart.filter((item)=> item.id !== action.payload)
//         },
//         increaseItemQuantity:(state,action)=>{
//             state.cart = state.cart.map((item)=>{
//                 if(item.id === action.payload){
//                     return {...item,quantity :item.quantity +1};
//                 }
//                 return item;
//             });
//         },

//         decreaseItemQuantity:(state,action)=>{
//             state.cart = state.cart.map((item)=>{
//                 if(item.id === action.payload){
//                     return {...item,quantity :item.quantity -1};
//                 }
//                 return item;
//             });
//         }

//     }
// })

// export const {addToCart,  getCartTotal, removeItem,increaseItemQuantity,decreaseItemQuantity} =Addcart.actions;