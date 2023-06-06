import React, { useRef, useState } from 'react'
import Card from './Card';


/*
Tương tự useState, dùng để lưu lại giá trị sau mỗi lần component render, tuy nhiên khi ref thay đổi thì giao diện không phải render lại.

==> useRef: lưu giá trị sau mỗi lần component render nhưng không thay đổi giá trị
==> useState: cũng lưu giá trị nhưng sau khi setState thì component sẽ render lại
 */


const UseRef = () => {
    console.log(1);
    // const [userLogin, setUserLogin] = useState({
    //     username: "",
    //     password: ""
    // })
    const elementRef = useRef();
    const userLogin = useRef({
        username: "",
        password: ""
    }) // lưu lại giá trị sau mỗi lần render

    const handleChange = (e) => {
        const { id, value } = e.target;
        userLogin.current[id] = value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userLogin.current);
        elementRef.current.handleLike();
    }
    return (
        <form action="" className="container" onSubmit={handleSubmit}>
            <h3>Login</h3>
            <div className="form-group">
                <p>Username</p>
                <input type="text" id='username' className='form-control' onChange={handleChange} />
            </div>
            <div className="form-group">
                <p>Password</p>
                <input id='password' className='form-control' onChange={handleChange} />
            </div>
            <div className="form-group">
                <button className='btn btn-dark m-2' type='submit'>Login</button>
            </div>
            <hr />
            <div className="w-25">
                <Card ref={elementRef}></Card>
            </div>

        </form>
    )
}

export default UseRef