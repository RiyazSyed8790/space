import React from "react";
import Doug from "../assets/image-douglas-hurley.png";
import Anoush from "../assets/image-anousheh-ansari.png";
import Mark from "../assets/image-mark-shuttleworth.png";
import Victor from "../assets/image-victor-glover.png";
import crew from "../crew";
export default function Home(){
    const [white,setWhite] = React.useState(1);
    function handleClick(e){
      setWhite(e);
    }
    let inLinestyle={
        backgroundColor:"white"
    }
    let pics = [Doug,Mark,Victor,Anoush];
    return (
        <div className=" text-white flex flex-col sm:flex-row items-center justify-center my-8 md:justify-normal text-center md:text-left md:mx-36 md:my-0 ">
            <h1 className="barlow text-xl md:text-3xl font-light tracking-widest sm:hidden"><span className=" text-gray-600">02</span> MEET YOUR CREW</h1>
            <div className="md:flex sm:flex-col md:flex-row flex flex-col-reverse   md:justify-between  w-full ">

                <div className="left flex flex-col-reverse sm:flex-col   md:max-w-[490px]">
                <div>
                <h1 className="barlow hidden sm:block text-xl md:text-3xl font-light tracking-widest"><span className=" text-gray-600">02</span> MEET YOUR CREW</h1>
                <div className="info md:my-20">
                  <h2 className="belle my-4 text-3xl text-gray-600">{crew[white-1].design}</h2>
                  <h1 className="belle my-4 text-4xl sm:text-5xl tracking-wide">{crew[white-1].name}</h1>
                  <p className="barlow text-base px-8 sm:px-20 md:px-0 sm:text-lg text-[#D0D6F9] font-light my-4">{crew[white-1].desc}</p>
                </div>
                </div>
                <nav className="child:mx-2">
                    <button style={white===1?inLinestyle:{backgroundColor:"#979797"}} onClick={()=>handleClick(1)} className="   w-3 h-3 rounded-full"></button>
                    <button style={white===2?inLinestyle:{backgroundColor:"#979797"}} onClick={()=>handleClick(2)} className="   w-3 h-3 rounded-full"></button>
                    <button style={white===3?inLinestyle:{backgroundColor:"#979797"}} onClick={()=>handleClick(3)} className="   w-3 h-3 rounded-full"></button>
                    <button  style={white===4?inLinestyle:{backgroundColor:"#979797"}} onClick={()=>handleClick(4)} className="   w-3 h-3 rounded-full"></button>
                  </nav>
                </div>
                <div className="right flex justify-center md:justify-end  my-4 md:my-0">
                    <img src={pics[white-1]} alt="person-pic" className=" w-2/3 h-auto" />
                </div>
            </div>
        </div>
    )
}