import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
const Home = () => {
    const [products, setProducts] = useState([]);
    const getProduct = async () => {
        const res = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: "GET"
        });
        setProducts(res.data.content);
    }

    useEffect(() => {
        getProduct()
    }, [])
    return (
        <div className="container">
            <h3>Shoes Shop</h3>
            <div className="row ">
                {products.map(product => {
                  return <div className="col-4 mt-2">
                        <div className="card">
                            <img src={product.image} alt="" />
                            <div className="card-body">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                                <NavLink className="btn btn-dark" to={`/detail/${product.id}`}>View Detail</NavLink>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Home