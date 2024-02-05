import React from "react";
import { Link } from "react-router-dom";


function Footer() {

    return (

        <div>
            {/* As a Footer  */}
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1"><Link to ="/CZDDS-ConsentForms/">Home </Link></span>
                </div>
            </nav>
           

        </div>


    );
}

export default Footer;