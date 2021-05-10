import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Contact Us</a>
                    <Link to ="/answer" style={{textDecoration:"none"}}>                    
                    <a class="navbar-brand" >Answer</a>                 
                    </Link> 
                </div>
            </nav>            
        </div>
    )
}

export default Navbar
