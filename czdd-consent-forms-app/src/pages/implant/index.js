import React from "react"
import Jumbotron from "../../components/Jumbotron"
import Navbar from "../../components/Navbar"


function Implant (){
    return(
        <div className="container">

            <div className="row">
                <div className="col"><Navbar /></div>
            </div>
            <br />

            <div className="row">
                <div className="col"> <Jumbotron /> </div>
            </div>


        </div>


    )
}

export default Implant