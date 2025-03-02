import React from "react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
const App = () =>{
  return (
    <div className="font-extralight min-h-screen w-[100vw] overflow-hidden">
      
         <Navbar/>
        <Home/>
        <About/>  
          <Services/>
       <Footer/>  
        </div>
  )
}
export default App;