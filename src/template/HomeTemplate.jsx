import React from 'react'
import Header from '../Components/Header'
import { Outlet } from "react-router-dom";
const HomeTemplate = () => {
    return (
        <div>
            <Header></Header>
            <div className="content" style={{ minHeight: "650px" }}>
                <Outlet></Outlet>
            </div>
            <footer className='fs-3 text-center text-white p-5 bg-dark'>
                Footer
            </footer>
        </div>
    )
}

export default HomeTemplate