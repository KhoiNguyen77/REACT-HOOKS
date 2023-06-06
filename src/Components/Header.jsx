import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">Navbar</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" aria-current="page">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hooks</NavLink>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item bg-white text-dark" to="/usestate">UseState</NavLink>
                            <NavLink className="dropdown-item bg-white text-dark" to="/useeffect">UseEffct</NavLink>
                            <NavLink className="dropdown-item bg-white text-dark" to="/usecallback">UseCallBack</NavLink>
                            <NavLink className="dropdown-item bg-white text-dark" to="/usememo">UseMemo</NavLink>
                            <NavLink className="dropdown-item bg-white text-dark" to="/useref">UseRef</NavLink>
                            <NavLink className="dropdown-item bg-white text-dark" to="/hookredux">UseHookRedux</NavLink>
                            <NavLink className="dropdown-item bg-white text-dark" to="/usenavigate">UseNavigate</NavLink>
                            <NavLink className="dropdown-item bg-white text-dark" to="/usesearchparam">UseSearch</NavLink>
                        </div>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0">
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

export default Header