import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const STATUS=Object.freeze({
    IDEL: 'success',
    ERROR: 'error',
    LOADING :'loading'
})

export const AllProduct =  createAsyncThunk ("allpro/fetch",async()=>{
    try{
        const productres = await axios.get("https://fakestoreapi.com/products")
        console.log("data",productres);
        return productres?.data
    }catch(error){
        console.log("error",error);
    }
})

export const Productslice = createSlice({
    name :"cart",
    initialState:{
        allproduct:[],
        status:STATUS.IDEL
    },
    reducers: {},
    extraReducers : (builder)=>{
        builder
        .addCase(AllProduct.pending,(state,action)=>{
            state.status = STATUS.LOADING
        })
        builder
        .addCase(AllProduct.fulfilled,(state,action)=>{
            state.allproduct=action.payload;
            state.status=STATUS.IDEL;
        })
        builder
        .addCase(AllProduct.rejected,(state,action)=>{
            state.status=STATUS.ERROR
        })
    }
});