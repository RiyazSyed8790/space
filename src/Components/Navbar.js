import React from "react";
import { Link } from "react-router-dom";
import SpaceLogo from "../assets/SpaceLogo";
import MenuLogo from "../assets/MenuLogo";
import CrossLogo from "../assets/CrossLogo";
export default function Navbar(){
   const [active,setIsActive] = React.useState(1);
   const [menu,setMenu] = React.useState(false);
   let inLinestyle= {
    borderBottom:"2px solid white"
   }
   function clickHandler(e){
        console.log(e);
        setIsActive(e);
        
    }
    function menutoggle(){
        setMenu(prev=>!prev);
    }

    return(    
    <nav className="flex  md:my-10 text-white text-base md:text-xl  justify-between items-center">
        <SpaceLogo />
        
        <ul style={menu?{}:{paddingLeft:"2rem",paddingRight:"2rem"}} className="flex  justify-end  list-none  child-hover:cursor-pointer px sm:child:mx-4 sm:child:py-4 md:child:py-8 tracking-widest md:tracking-widest    sm:bg-opacity-5 sm:bg-gray-100 sm:backdrop-blur-lg w-[475px] md:w-[830px] h-[96px]  ">
            <div className="sm:hidden flex justify-end w-full h-[100%]">
            <span onClick={menutoggle} style={menu?{display:"none"}:{display:"flex"}}  className="  flex items-center "><MenuLogo /></span>
            {menu?<div  style={menu?{display:"flex"}:{display:"none"}} className="bg-opacity-5  bg-gray-100 backdrop-blur-lg flex-col items-center  px-6 py-6 min-h-screen w-full  ">
                <span className="flex justify-end py-3  text-xl w-full"><CrossLogo click={menutoggle} /></span>
                <div className=" my-6 flex flex-col  w-full h-full barlow text-white child:mx-2 child:my-4 ">
            <Link to="/"  className="  font-bold"><span className=" ">00</span> <span  className=" font-light px-2">HOME</span></Link>
            <Link to="/destination"  className="  font-bold"><span className=" ">01</span> <span  className=" font-light px-2">DESTINATION</span></Link>
            <Link to="/crew"   className="  font-bold"><span className="  ">02</span> <span  className=" font-light px-2">CREW</span></Link>
            <Link to="/technology"  className="  font-bold"><span className="  ">03</span> <span  className=" font-light px-2">TECHNOLOGY</span></Link>
                </div>
            </div>:""}</div>
            <Link to="/" onClick={()=>clickHandler(1)} style={(active===1)?inLinestyle:{border:null}} className=" hidden sm:block font-bold"><span className=" invisible md:visible">00</span> <span  className=" font-light px-2">HOME</span></Link>
            <Link to="/destination" onClick={()=>clickHandler(2)} style={(active===2)?inLinestyle:{border:null}} className=" hidden sm:block font-bold"><span className=" invisible md:visible">01</span> <span  className=" font-light px-2">DESTINATION</span></Link>
            <Link to="/crew" onClick={()=>clickHandler(3)} style={(active===3)?inLinestyle:{border:null}}  className=" hidden sm:block font-bold"><span className="  invisible md:visible">02</span> <span  className=" font-light px-2">CREW</span></Link>
            <Link to="/technology" onClick={()=>clickHandler(4)} style={(active===4)?inLinestyle:{border:null}} className=" hidden sm:block font-bold"><span className="  invisible md:visible">03</span> <span  className=" font-light px-2">TECHNOLOGY</span></Link>
        </ul>
    </nav>
    )
}