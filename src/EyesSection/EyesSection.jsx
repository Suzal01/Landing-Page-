import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Eye.css";

const Eyes = () => {
  const [eye1, setEye1] = useState({ x: 0, y: 0 });
  const [eye2, setEye2] = useState({ x: 0, y: 0 });
  const [whiteDot, setWhiteDot] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;

      const angle = Math.atan2(deltaY, deltaX);

      const maxDistance = 10;
      const distance = Math.min(
        Math.hypot(deltaX, deltaY) / 10,
        maxDistance
      );

      const eyeX = Math.cos(angle) * distance;
      const eyeY = Math.sin(angle) * distance;

      setEye1({ x: eyeX, y: eyeY });
      setEye2({ x: eyeX, y: eyeY });
      setWhiteDot({ x: eyeX * 1.5, y: eyeY * 1.5 });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="container">
      <div className="text-center">
        <h1 className="heading">
          <div>ARE YOU READY?</div>
          <div className="flex-center">
            <span className="block">TO</span>
            <span className="eyes-wrapper">
              <div className="eye-container">
                <motion.div
                  style={{
                    x: eye1.x,
                    y: eye1.y,
                  }}
                  className="eye"
                >
                  <motion.div
                    style={{
                      x: whiteDot.x,
                      y: whiteDot.y,
                    }}
                    className="pupil"
                  ></motion.div>
                </motion.div>
              </div>
              <div className="eye-container">
                <motion.div
                  style={{
                    x: eye2.x,
                    y: eye2.y,
                  }}
                  className="eye"
                >
                  <motion.div
                    style={{
                      x: whiteDot.x,
                      y: whiteDot.y,
                    }}
                    className="pupil"
                  ></motion.div>
                </motion.div>
              </div>
            </span>
            <span className="block">START</span>
          </div>
          <div>THE CHAT!</div>
        </h1>
      </div>
    </div>
  );
};

export default Eyes;