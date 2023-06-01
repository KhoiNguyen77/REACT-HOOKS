import React, { useState } from 'react'

const UseState = () => {
    let [number, increaseState] = useState(1);
    const [img, setImage] = useState('https://i.pravatar.cc?u=1');
    const [size, setSize] = useState(16);
        return (
        <div className="container">
            <h3>Number: {number}</h3>
            <button className='btn btn-dark' onClick={() => {
                increaseState(number + 1)
            }}>+</button>
            <div className="mt-2">
                <h3>VD 2</h3>
                <div className="card w-25">
                    <div className="card">
                        <img src={img} alt="" />
                        <div className="card-body">
                            <button className='btn btn-danger' onClick={()=>{
                                let newImg = `https://i.pravatar.cc?u=${Math.floor(Math.random()*100)}`;
                                setImage(newImg);
                            }}>Random</button>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <h3>Ví dụ 3: tăng font chữ</h3>
                    <p style={{fontSize: `${size}px`}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, dicta.</p>
                            <button className='btn btn-danger mx-3' onClick={()=>{
                                setSize(size+1)
                            }}>+</button>
                            <button className='btn btn-primary' onClick={()=>{
                                setSize(size-1)
                            }}>-</button>
                </div>
            </div>
        </div>
    )
}

export default UseState