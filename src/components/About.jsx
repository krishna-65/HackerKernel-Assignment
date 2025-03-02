import React, { useState } from "react";
import Heading from "./Heading";
import IMAGE1 from "./All Files/News/With Box/N1.png"
import IMAGE2 from "./All Files/News/With Box/N2.png"
import IMAGE3 from "./All Files/News/With Box/N3.png"
import IMAGE4 from "./All Files/News/With Box/N4.png"
import IMAGE5 from "./All Files/News/With Box/N5.png"
import AboutCard from "./AboutCard";
const About = () =>{
    const text = "esign Wh"; 
    const [hoveredCharacter, setHoveredCharacter] = useState(null); 
    return(
<div className="bg-[#121111] flex flex-col justify-center  w-full py-10 overflow-hidden ">
    
    <Heading text={"About Us"}/>
    <div className="mt-20 lg:mt-0 text-nowrap mx-auto flex gap-2 font-extralight">
        {text.split("").map((char, index) => (
            <span
            key={index}
            className={`transition-opacity text-[21vw] md:text-[24vw] duration-300 ${
                hoveredCharacter === index ? "opacity-100" : "opacity-30"
            }`}
            onMouseEnter={() => setHoveredCharacter(index)}
            onMouseLeave={() => setHoveredCharacter(null)}
            >
            {char}
            </span>
        ))}
    </div>
        <div className="w-full flex flex-col items-end lg:px-32">
            <p className="px-3 pt-16 md:w-[400px] text-left lg:mr-32 text-gray-300">
                Architecture is the learned game, correct and magnificient, of forms assembled in thie ligh. So keeping in mind we started with our work. We are a team of 5 Architects with a clean and white vision.
            </p>
            <a href="#" className= "underline pl-3  lg:mr-32 w-[400px] text-left text-gray-400 hover:text-white"> Read More</a>
        </div>
        <div className="w-full bg-white h-[.1px] my-32"></div>
        <div className="w-[90%] mx-auto xs:ml-auto overflow-hidden">
            <Heading className={"left-0"} text={"News"}/>
            <div className=" w-[60%]  ml-auto my-20 flex gap-20 sm:pl-48 cart-scroll">
                {[IMAGE1,IMAGE2,IMAGE3,IMAGE4,IMAGE5].map((image,k)=>
                <AboutCard key={k} image={image}/>)}
            </div>
        </div>
 </div>
    )
}
export default About;