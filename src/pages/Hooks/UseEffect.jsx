import { useState, useEffect } from "react"
import React from 'react'

const UseEffect = () => {
    //TH1: useEFfect 1 tham số
    const [number, setNumber] = useState(1);
    const [like, setLike] = useState(1);
    console.log("render");
    useEffect(()=>{
        //chạy lần đầu tiên và mỗi khi state thay đổi
        console.log("run");
        // Không setState tại đây (muốn setState thì phải có if)
    })

    useEffect(()=>{   // useEffect dùng cho các api dạng getDetail:
        console.log("1");
    },[like]);
    useEffect(()=>{ // thường dùng cho api getAll
        return () => { // kích hoạt khi component mất khỏi giao diện
            console.log("will Unmoute"); // clear các biến chạy ngầm
        }
    },[])
  return (
    <div className="container">
        <h3>Number: {number}</h3>
        <button className="btn btn-primary" onClick={()=>{
            setNumber(number + 1)
        }}>+</button>
        <h3>{like}</h3>
        <button className="btn btn-primary" onClick={()=>{
            setLike(like + 1)
        }}>+</button>
    </div>
  )
}

export default UseEffect