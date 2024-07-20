import React, { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { motion } from 'framer-motion';
import './Animate.css';

const Navbar = () => {
  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
      const interval = setInterval(() => {
        setPercentage((prev) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(interval);
            setLoading(false);
            setTimeout(() => {
              document.body.style.overflow = 'auto'; // Enable scrolling
            }, 1000); // Wait for the animation to complete
            return prev;
          }
        });
      }, 30);
    }
  }, [loading]);

  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.4' className="full-width">
      <div className="min-screen-height flex-col black-background">
        <div className={`relative min-screen-height white-background transition ${loading ? 'loadingState' : 'normalState'}`}>
          <div className={`${loading ? 'flex' : 'hidden'} flex-col center-all full-height`}>
            <div className="absolute top-left text-6xl font-bold">Logo</div>
            <div className="absolute middle-left transform-center text-6xl font-bold text-left leading-none">
              <h1 className="text-9xl font-extrabold leading-tight">
                WEL-COME 
              </h1>
              <h1 className="text-7xl font-extrabold leading-tight gray-text">
                TO OUR 
              </h1>  
              <h1 className="text-9xl font-extrabold leading-tight">
                CHAT APP
              </h1>
            </div>
            <div className="absolute bottom-left text-3xl font-bold">Loading:</div>
            <div className="absolute bottom-right text-6xl font-bold">{percentage}%</div>
          </div>
          <div className={`${loading ? 'hidden' : 'block'}`}>
            <div className="screen-height flex-col gradient-animation">
              <header className="header">
                <div className="logo">Logo</div>
                <nav className="nav">
                  <a href="#" className="nav-link">Home</a>
                  <a href="#" className="nav-link">About us</a>
                  <a href="#" className="nav-link">Reviews</a>
                  <a href="#" className="nav-link">Contact us</a>
                </nav>
              </header>
              <main className="main-content">
                <div className="relative flex items-center">
                  <h1 className="right1 text-9xl font-extrabold leading-tight">
                    WEL-COME 
                  </h1>
                </div>
                <h1 className="text-7xl font-extrabold leading-tight gray-text fade-animation">
                  TO OUR
                </h1> 
                <img className="right" src='chat.png' alt="Chat Image" />
                <h1 className="right2 text-9xl font-extrabold leading-tight">
                  CHAT APP
                </h1>
                <div className="left absolute justify-center right-5 w-30 h-20">
                  <img src="0.png" alt="Chatting People" />
                </div>
              </main>
              <footer className="footer">
                <button className="get-started">
                  Get Started
                </button>
                <div className="arrow-container">
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
