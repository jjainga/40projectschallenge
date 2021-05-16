import React from 'react'
import { Link, useLocation } from "react-router-dom";



const Navigate = () => {

    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/40projectchallenge" className={location.pathname === "40projectchallenge" ? "nav-link active" : "nav-link"} >#40Challenge</Link>
                
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="https://www.google.com"id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Projects
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/Color" className={location.pathname === "Color" ? "nav-link active" : "nav-link"} class="dropdown-item" href="https://www.google.com">Color Flip</Link>
                            
                                </div>
                            </li>
                        
                        </ul> 
                    </div>
            </nav>
        </div>
    )
}
export default Navigate;

