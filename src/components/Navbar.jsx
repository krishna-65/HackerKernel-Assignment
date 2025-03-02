import React from "react";
import  LOGO from "./All Files/Logo & Others/Logo.png"
import { IoReorderThreeOutline } from "react-icons/io5";
 const Navbar = ()=>{
    return(
        <nav className="fixed w-[100%]  px-12 py-4">
             <div className="lg:max-w-7xl mx-auto flex  flex-row items-center justify-between">
                    <img src={LOGO} alt="" className="w-32"/>
            
                    <div className="hidden md:flex gap-8 text-sm uppercase text-gray-400 tracking-wide">
                    <a href="#" className="hover:text-white transition">Projects</a>
                    <a href="#" className="hover:text-white transition">About</a>
                    <a href="#" className="hover:text-white transition">News</a>
                    <a href="#" className="hover:text-white transition">Services</a>
                    <a href="#" className="hover:text-white transition">Contact</a>
                    </div>
                    <IoReorderThreeOutline className="text-gray-400 text-4xl md:hidden" />
                   
            
        </div>
    
     </nav>
    )
}

export default Navbar;