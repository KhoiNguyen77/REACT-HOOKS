import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

const UseSearch = () => {
    const [searchParam, setSearchParam] = useSearchParams();
    const [products, setProducts] = useState([]);
    let keyword = searchParam.get("q");
    const getProductByKey = async () => {
        let res = await axios({
            url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
            method: "GET"
        })
        setProducts(res.data.content)
    }
    useEffect(() => {
        if (keyword != null) {
            getProductByKey()
        }
    }, [keyword])
    const keywordRef = useRef("");
    const handleChange = e => {
        let { value } = e.target;
        keywordRef.current = value;
    }
    const handleSubmit = e => {
        e.preventDefault()
        // Đưa keyword lên thanh url
        setSearchParam({
            q: keywordRef.current
        })
    }
    return (
        <div className="container">
            <h3>Search</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className='form-control' id='searchString' onChange={handleChange} /> <button className='btn btn-success' >Search</button>
                </div>
                <div className="mt-2">
                    <h3>Seach Result</h3>
                    <div className="row">
                        {products.map(product => {
                            return <div className="col-3">
                                <div className="card">
                                    <img src={product.image} alt="" />
                                    <div className="card-body">
                                        <h3>{product.name}</h3>
                                        <p>{product.price}</p>
                                        <NavLink to={`/detail/${product.id}`} className="btn btn-dark">View Detail</NavLink>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </form>
        </div>
    )
}

export default UseSearch