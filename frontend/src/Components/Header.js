import React from "react";
import LogoE from '../image/LogoE.png'
const Header = () =>{
    return(
        <div className="bg-white flex font-sans h-24 pt-8 items-center font-bold text-xl">
            <div className="float-left w-1/10">
                <img className="mt-4 mr-3 mb-3 ml-7"
                src={LogoE} 
                alt="Logo" 
                width={80}/>
            </div>
            <div className="float-left h-24 border-black border-2  my-3 ml-3"></div>
            <div className="float-left my-3 ml-3 pl-5">
                <h3 className="mx-3 my-3">E-checking</h3>
                <h3 className="mx-3 my-3">Checking Attendance</h3>
            </div>
        </div>
    )
}
export default Header;