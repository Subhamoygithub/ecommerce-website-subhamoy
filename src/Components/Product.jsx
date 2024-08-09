import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../ReduxToolkit/Cartslice'
import { AllProduct, STATUS } from '../ReduxToolkit/Productslice'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid"


const Product = () => {
    const [perPage, setPerPage] = useState(1)
    const startIndex = (perPage - 1) * 5;
    const endIndex = (perPage * 5);
    console.log(perPage);

    const dispatch = useDispatch()
    const { status, allproduct } = useSelector((state) => state.Addtocartstore)


    console.log("Quantity", allproduct);
    useEffect(() => {
        dispatch(AllProduct())
    }, [])
    if (status !== STATUS.IDEL) {
        return (
            <h1 style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</h1>
        )
    }
    
    return (
        <>
            <div class="card">
                <div class="row">
                    {
        allproduct?.slice(startIndex,endIndex)?. map((item, index) => {
                            return (
                                <>
                                    <div class="col-3 readmores ">
                                        <img src={item.image} class="card-img-top mt-3" alt="Fissure in Sandstone" style={{ maxHeight: "300px", maxWidth: "300px" }} />
                                        <div class="card-body">
                                            <h5 class="card-title">{item.title}</h5>
                                            <p class="card-text">{item.description.slice(0, 130)}........</p>
                                            <p style={{ fontSize: "20px", fontStyle: "oblique" }}>Price :$ {item.price}</p>

                                            <a href="#!" class="btn btn-primary" data-mdb-ripple-init onClick={() => dispatch(addToCart(item))}>ADD TO CART</a>

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>

            </div>
            <Grid item xs={12} display={'flex'} justifyContent={'center'} m={2}>
                        <Pagination count={allproduct?.length / 5} showFirstButton showLastButton onChange={(_,value) => setPerPage(value) } />
                    </Grid>
            
        </>
    )
}

export default Product
