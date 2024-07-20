import React from "react";
import './lastpage.css';

const App = () => {
  return (
    <>
    <div  className=" main bg-[#f1f1f1] h-screen flex flex-col justify-between">
    <div className="flex justify-between p-8">
      <div className="text-6xl font-bold leading-none">
        CHAT-<br />together
      </div>
      <div className="text-7xl font-bold leading-none">EXPRESSION</div>
    </div>

    <div className="flex flex-1">
      {/* Left Side */}
      <div className="flex-1 flex flex-col justify-between px-8 py-8">
      <div className="flex flex-grow justify-between items-end">
      <div className="text-black font-bold text-4xl">Logo</div>
      </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-1">
      <div className="flex-1 flex-grow flex-col justify-between px-8 py-8">
        <div>
          <div className="font-bold">S:</div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Instagram</a>
            <a href="#" className="block hover:underline">Behance</a>
            <a href="#" className="block hover:underline">Facebook</a>
            <a href="#" className="block hover:underline">Linkedin</a>
          </div>
        </div>
        <br></br>
        <br></br>
<div className="font-bold">L:</div>
            <div className="space-y-1 z-10">
              <a href="#" className="block hover:underline ">2081/04/20</a>
              <a href="#" className="block hover:underline">Vancouver, Canada</a>
            </div>
            </div>
            </div>
<div className="items-end flex-1 flex flex-col justify-center px-8 space-y-20 ">
          <div>
            <div className="font-bold">M:</div>
            <div className="space-y-2">
              <a href="#" className="block hover:underline">Home</a>
              <a href="#" className="block hover:underline">Services</a>
              <a href="#" className="block hover:underline">Our work</a>
              <a href="#" className="block hover:underline">About us</a>
              <a href="#" className="block hover:underline">Insights</a>
              <a href="#" className="block hover:underline">Contact us</a>
            </div>
          </div>
          <div>
            </div>
            </div>
        <footer className="footer">
  Terms of Service | Privacy Policy | Help | Iphone App | Android App | Users | Home | Chatting | Reviews | Services | Contact Us
</footer>
      </div>
      </div>
      </>
  );
};

export default App;