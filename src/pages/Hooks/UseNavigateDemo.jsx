import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const UseNavigateDemo = () => {
    const navigate = useNavigate(); //hook dùng để chuyển hướng trang trong function component
    const user = useRef({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        let { id, value } = e.target
        user.current[id] = value;
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (user.current.email === "cybersoft" && user.current.password === "123") {
            navigate("/profile");
        } else {
            navigate("/forgotpass");
        }

    }
    return (
        <div className='container d-flex justify-content-center align-item-center'>
            <div className="card w-25">
                <div className="bg-dark text-white text-center">
                    <h3>Login</h3>
                </div>
                <div className="card-body">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <p>Email</p>
                            <input type="text" id='email' className='form-control' onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <p>Password</p>
                            <input type="password" id='password' className='form-control' onChange={handleChange} />
                        </div>
                        <div className="form-group text-center mt-3">
                            <button className='btn btn-primary' type='submit'>Login</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default UseNavigateDemo