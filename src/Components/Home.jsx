import React from "react";
function Home(){
    return (
        <div className="text-white flex flex-wrap h-3/5 justify-center items-center">
            <div className="container my-4 sm:my-20 md:px-40 flex flex-wrap justify-center md:justify-between items-center">
               <div className="content max-w-[450px]   text-center md:text-left  ">
                <h2 className="barlow font-light text-[#D0D6F9] text-xl sm:text-3xl my-4 tracking-widest">SO, YOU WANT TO TRAVEL TO</h2>
                <h2 className="belle text-8xl sm:text-9xl my-4">SPACE</h2>
                <p className="barlow text-base px-4 sm:px-0 sm:text-lg text-[#D0D6F9] font-light my-4">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
               </div>
               <div className=" circle flex my-16 sm:my-36 md:my-0 justify-center items-center bg-white w-36 h-36 sm:w-64 sm:h-64 rounded-[50%]">
                <h1 className="belle text-2xl sm:text-4xl text-black">EXPLORE</h1>
               </div>
            </div>
        </div>
    )
}
export default Home;