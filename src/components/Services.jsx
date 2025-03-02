import React from "react";
import Heading from "./Heading";
import IMAGE1 from "./All Files/Contact Us Icons/CU1.png"
import IMAGE2 from "./All Files/Contact Us Icons/CU2.png"
import IMAGE3 from "./All Files/Contact Us Icons/CU3.png"
const Services = () =>{
    return (
        <div className="min-h-screen w-[100%] bg-[#eef3f7]">
            <div className="w-[90%] h-screen sm:ml-auto flex flex-col justify-center pt-32">
                <Heading text={"Services"} className={"text-black"}/>
                <div className="mt-20 sm:pl-48 px-3 sm:px-0 ">
                    <h3 className="text-black tracking-widest text-[4.5rem]  md:text-[5em] font-extralight ">Design</h3>
                    <h3 className="text-black tracking-widest text-[4.5rem]  md:text-[5em]font-extralight ">Direction</h3>
                    <h3 className="text-black tracking-widest text-[4.5rem]  md:text-[5em] font-extralight ">Guide</h3>
                    <a href="#" className="text-gray-500  px-5 sm:px-0">Read More</a>
                </div>
               
            </div>

            <div className="w-[90%]  sm:ml-auto flex flex-col justify-center pt-20 pb-20">
                <Heading text={"Contact Us"} className={"text-black"}/>
                <div className="flex flex-col items-center justify-center gap-20 mt-20">
                    <div>
                        <img src={IMAGE1}  className="w-20 opacity-30" alt="" />
                       <div className="relative bottom-5 left-6 ">
                       <p className="text-black">White Architectures </p>
                        <p  className="text-black"> 2787 Street,Fremont</p>
                            <p  className="text-black"> California 94538</p>
                       </div>
                    </div>
                    <div className="relative left-6">
                    <img src={IMAGE2}  className="w-20 opacity-30" alt="" /> 
                        <p className="relative bottom-5 left-6 text-black">wagetintouch@whitearch.com</p>
                    </div>
                    <div className="relative -left-6">
                    <img src={IMAGE3}  className="w-20 opacity-30" alt=""/>
                        <p className="relative bottom-5 left-6 text-black">510-979-9360</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;