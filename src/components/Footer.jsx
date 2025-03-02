import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black sm:pb-[250px] lg:pb-10 flex flex-col justify-between text-white w-full py-16 px-10 md:px-20 ">
     
     <div className="sm:h-[50vh] lg:h-[82vh] flex flex-col justify-center">
       
      <div className="text-center mt-16 ">
        <h1 className="text-[8vw] md:text-[7vw] lg:text-[6vw] font-light tracking-wider font-serif">
          White Architectures
        </h1>
      </div>

   
      <div className="flex justify-start sm:ml-20 lg:ml-70 mt-4 md:mt-10 gap-4 md:gap-8 text-xs md:text-sm text-gray-400 uppercase tracking-wide">
        <a href="#" className="hover:text-white transition">Instagram</a>
        <a href="#" className="hover:text-white transition">Twitter</a>
      </div>
     </div>

      <div className="w-full border-t border-gray-500 mt-16 relative">
        <div className="absolute right-10 bottom-10 h-30 w-[1px]  bg-gray-500"></div>
        <div className="flex justify-around flex-col sm:flex-row sm:items-center mt-4 md:mt-10 ">
            <p>skillmix2021</p>
            <p>Top</p>
            <p>skillmix2021@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

