import React from "react";
import tech from "../tech";
import rocket_land from "../assets/image-launch-vehicle-landscape.jpg";
import rocket_potr from "../assets/image-launch-vehicle-portrait.jpg"; 
import port_land from "../assets/image-spaceport-landscape.jpg";
import port_potr from "../assets/image-spaceport-portrait.jpg";
import caps_land from "../assets/image-space-capsule-landscape.jpg";
import caps_potr from "../assets/image-space-capsule-portrait.jpg";
export default function Technology(){
    const [ww,setWW] = React.useState(window.innerWidth);
    const [act,setAct] = React.useState(1);
    React.useEffect(function(){
      window.addEventListener("resize",()=>{
        setWW(window.innerWidth);
      })  
    },[])
    function clickHandler(e){
        setAct(e);
    }
    let inLineStyle = {
        backgroundColor:"white",
        color:"black"
    }
    let Pics = [{
        potrait: rocket_potr,
        landscape: rocket_land
    },
    {
        potrait: port_potr,
        landscape: port_land
    },
    {
        potrait: caps_potr,
        landscape: caps_land
    }]
    return (
        <div className= "text-white  my-8   md:mx-36 md:my-0   ">
            <h1 className="barlow text-center md:text-left text-xl md:text-3xl font-light tracking-widest"><span className=" text-gray-600 pr-2">03</span>SPACE LAUNCH 101 </h1>
            <div className="flex  flex-col-reverse md:flex-row  h-auto">
                <div className="left  flex flex-col md:flex-row justify-start ">
                   <nav className=" my-2 md:mr-[125px] flex flex-row justify-center child:mx-4 md:child:my-4 md:child:mx-0 md:flex-col">
                     <button onClick={()=>clickHandler(1)} style={act===1?inLineStyle:{backgroundColor:"transparent",color:"white"}} className=" text-3xl bord w-14 h-14 md:w-20 md:h-20 rounded-[50%]">1</button>
                     <button onClick={()=>clickHandler(2)} style={act===2?inLineStyle:{backgroundColor:"transparent",color:"white"}} className=" text-3xl bord w-14 h-14 md:w-20 md:h-20 rounded-[50%]">2</button>
                     <button onClick={()=>clickHandler(3)} style={act===3?inLineStyle:{backgroundColor:"transparent",color:"white"}} className=" text-3xl bord w-14 h-14 md:w-20 md:h-20 rounded-[50%]">3</button>
                   </nav>
                   <div className=" info flex justify-evenly   flex-col child:text-center md:child:text-left  md:max-w-[550px]">
                        <div>
                        <h2 className="barlow  mt-4 md:mt-0 text-xl font-light text-[#D0D6F9]">THE TERMINOLOGY ...</h2>
                        <h1 className="belle my-4  text-3xl sm:text-5xl tracking-wide">{tech[act-1].name}</h1>
                        </div>
                        <p className="barlow text-base px-10 sm:px-20 md:px-0 sm:text-lg text-[#D0D6F9] font-light mb-4">{tech[act-1].desc}</p>
                   </div>
                </div>
                <div className="right  my-4 flex justify-center md:justify-end md:my-0 ">
                    <img src={ww>768?Pics[act-1].potrait:Pics[act-1].landscape} alt="machine-pic" className=" w-full md:w-[90%] h-auto" />
                </div>
            </div>
            
        </div>
    )
}