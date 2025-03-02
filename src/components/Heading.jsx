import React from "react";
const Heading = ({className,text}) =>{
    return (<div className="relative">
         <div className={`absolute top-0 left-8 md:left-48 w-8 h-8 rounded-full bg-[#3a3535a9] z-0`}></div>
        <h3 className={`text-xl pl-12  text-gray-300 tracking-widest relative z-10 md:pl-52 ${className}`}>{text}</h3>
    </div>)
}

export default Heading;
