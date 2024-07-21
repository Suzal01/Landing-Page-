import React, { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Animate.css'
import { motion } from 'framer-motion';


const Navbar = () => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);


  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'; 
      const interval = setInterval(() => {
        setPercentage((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setLoading(false);
            setTimeout(() => {
              setLoadingCompleted(true);
              document.body.style.overflow = 'auto'; 
            }, 1000); 
            return prev;
          }
        });
      }, 30);
    }
  }, [loading]);

    return (
        <div data-scroll data-scroll-section data-scroll-speed='-.4' class=" w-full">
           <div className="min-h-screen flex flex-col justify-between bg-black">
      <div className={`relative min-h-screen bg-white transition-all duration-1000 ease-in-out ${loading ? 'loadingState' : 'normalState'}`}>
        <div className={`${loading ? 'flex' : 'hidden'} flex-col justify-center items-center h-full`}>
          <div className="absolute top-8 left-8 text-6xl font-bold">Logo</div>
          <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-6xl font-bold text-left leading-none">
          <h1 className="text-9xl font-size-rem font-extrabold leading-tight">
            WEL-COME 
          </h1>
        <h1 className="text-7xl font-extrabold leading-tight text-[#666]">
          TO OUR 
        </h1>  
        <h1 className="text-9xl font-extrabold leading-tight">
          CHAT APP
        </h1>
          </div>
          <div className="absolute bottom-8 left-8 text-3xl font-bold">Loading:</div>
          <div className="absolute bottom-8 right-8 text-6xl font-bold">{percentage}%</div>
        </div>
          <div className={`${loading ? 'hidden' : 'block'}`}>
    <div className="h-screen flex flex-col animate-gradient">
      <header className=" flex justify-between items-center p-6">
        <div className="text-3xl font-bold">Logo</div>
        <nav className="space-x-10">
        <a href="#" className="text-lg text-gray-800 hover:text-gray-900 hover:underline">Home</a>
          <a href="#" className="text-lg text-gray-800 hover:text-gray-900 hover:underline">About us</a>
          <a href="#" className="text-lg text-gray-800 hover:text-gray-900 hover:underline">Reviews</a>
          <a href="#" className="text-lg text-gray-800 hover:text-gray-900 hover:underline">Contact us</a>
        </nav>
      </header>
      <main className=" mr-0 px-5 flex-grow flex flex-col items-start justify-end text-center">
        <div className="relative flex items-center">
          <h1 className=" right1 text-9xl font-size-rem font-extrabold leading-tight">
            WEL-COME 
          </h1>
        </div>
        <h1 className="text-7xl font-extrabold leading-tight text-[#666] animate-fude">
          TO OUR</h1> <img className="right" src='chat.png'></img>
       <h1 className=" right2 text-9xl font-extrabold leading-tight">
          CHAT APP
        </h1>
      
        <div className="left absolute  justify-center right-5 w-30 h-20">
              <img src="0.png" alt="Chatting People" />
            </div>
        
        </main>
        <footer className="flex justify-end items-center p-6 border-t border-gray-400">
        <button className="ml-auto text-lg px-6 py-2 border border-black text-white bg-black font-bold rounded-full flex items-center hover:bg-white hover:text-black justify-center animate-pulse">
          Get Started
        </button>
        <div className="ml-4 w-10 h-10 border border-black rounded-full bg-black text-white flex items-center  hover:bg-white hover:text-black justify-center animate-pulse">
        <ArrowForwardIcon />
        </div>
      </footer>
    </div>
    </div>
        </div>
        </div>
        </div>
  );
}

export default Navbar;