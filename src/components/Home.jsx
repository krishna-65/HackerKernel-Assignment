import React from "react";
import IMAGE from "./All Files/Projects Images/P1.jpg";

const Home = () => {
  return (
    <div className="relative w-[100%] min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between  lg:pr-32 ">
   
      <div
        className="absolute w-[100%] inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          zIndex: -2, 
        }}
      ></div>

      <div className="absolute inset-0 bg-black opacity-80 z-[-1]"></div>

   
      <div className="relative z-10 flex items-center gap-10 pb-10">      
        <div className="w-[150px] lg:w-48 h-[1px] bg-gray-400 mb-4"></div>
      <div className="pb-20 md:pb-0 overflow-y-hidden h-[100%] ">
      <h1 className="text-3xl text-white font-light">Sharp & Beautiful</h1>
        <h1 className="text-5xl text-white font-bold mt-2">The Edge Building</h1>
        <p className="text-lg text-gray-300 mt-4">Madrid, Spain</p>
      </div>
      </div>


      <div className="relative z-10 w-full  left-1/9 top-[200px] lg:top-0 lg:left-0 ">
        <div className="relative">
          <div className="absolute top-[-30px]  right-[55px] sm:right-[100px]   lg:right-[-20px] w-[300px] h-[1px] bg-gray-400"></div>
          <div className="absolute top-[-50px] right-[70px] sm:right-[120px] lg:right-[30px] h-[100px] w-[1px] bg-gray-400"></div>

          <img
            src={IMAGE}
            alt="The Edge Building"
            className=" w-[350px]  lg:w-[450px] ml-auto h-auto  rounded-lg shadow-lg mr-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;  
