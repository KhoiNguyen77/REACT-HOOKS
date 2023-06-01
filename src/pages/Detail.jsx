import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Detail = () => {

    const [product, setProduct] = useState({})
    const params = useParams();
    const getProduct = async() => {
        const res =  await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
            method: "GET"
        })
        setProduct(res.data.content);
    } 
    useEffect(()=>{
        getProduct();
    },params.id)
    return (
        <div className='container my-3'>
            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div className="col-8">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <button className='btn btn-dark mt-2'>Add to cart <i className='fa fa-cart'></i></button>
                </div>
            </div>
            <div className="mt-2">
                <div className="row">
                    <h3>Related Products</h3>
                    {product.relatedProducts?.map(product => {
                        return                     <div className="col-4">
                        <div className="card">
                            <img src={product.image} alt="" />
                            <div className="card-body">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                                <NavLink className='btn btn-dark' to={`/detail/${product.id}`}>View Detail</NavLink>
                            </div>
                        </div>
                    </div>
                    })}

                </div>
            </div>


        </div>
    )
}

export default Detail