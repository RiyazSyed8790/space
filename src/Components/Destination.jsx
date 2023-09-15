import planets from "../planets";
import React from "react";
import moon from "../assets/image-moon.png";
import mars from "../assets/image-mars.png";
import europa from "../assets/image-europa.png";
import titan from "../assets/image-titan.png";
export default function Home(){
    const [act,setAct] = React.useState(1);
    let inLinestyle= {
        textDecorationLine:"underline",
        textUnderlineOffset:"8px"
       }
       function handleClick(e){
         setAct(e);
       }
    let imgs = [moon,mars,europa,titan];   
    return (
        <div className="text-white flex items-center justify-center my-8 md:justify-normal text-center md:text-left md:mx-36 md:my-0">
            <div className=" w-full ">
            <h1 className="barlow text-xl md:text-3xl font-light tracking-widest"><span className=" text-gray-600">01</span> PICK YOUR DESTINATION</h1>
            <div className="w-full   md:flex md:items-center  md:justify-between ">
                <div className="left  flex justify-center my-8 md:my-10">
                    <img src={imgs[act-1]} alt="planet-pic"  className="w-1/2 h-1/2 md:w-3/4 md:h-3/4 rotat" />
                </div>
                <div className="right  flex md:max-w-[450px]  items-center md:items-start flex-col">
                <nav>
                        <ul className="flex text-base text-gray-400 tracking-widest  barlow list-none child:pr-4 child-hover:cursor-pointer">
                            <li style={act===1?inLinestyle:{textDecorationLine:"none"}} onClick={()=>handleClick(1)}>MOON</li>
                            <li style={act===2?inLinestyle:{textDecorationLine:"none"}} onClick={()=>handleClick(2)}>MARS</li>
                            <li style={act===3?inLinestyle:{textDecorationLine:"none"}}  onClick={()=>handleClick(3)}>EUROPA</li>
                            <li style={act===4?inLinestyle:{textDecorationLine:"none"}} onClick={()=>handleClick(4)}>TITAN</li>
                        </ul>
                </nav>
                <h1 className="belle text-7xl sm:text-9xl my-4" >{planets[act-1].name}</h1>
                <p className="barlow text-base px-4 sm:px-2 sm:text-lg text-[#D0D6F9] font-light my-4">{planets[act-1].desc}</p>
                <hr/>
                <div className="avgs child:my-4 w-full sm:flex  sm:justify-around md:justify-normal">
                    <div>
                    <h1 className="text-gray-400 text-base tracking-widest  barlow">AVG. DISTANCE</h1>
                    <span className="belle text-2xl">{planets[act-1].distance}</span>
                    </div>
                    <div className=" md:ml-28">
                    <h1 className="text-gray-400 text-base tracking-widest  barlow">EST. TRAVEL TIME</h1>
                    <span className="belle text-2xl">{planets[act-1].time}</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}