import React from "react";
import "./Hero.css";
import myimg from "../../assets/myimg.jpg";
import myimg2 from "../../assets/myimg2.jpg";
import mail from "../../assets/mail.svg";
import location from "../../assets/location.svg"

const Hero = () => {
  return (
    <div id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-head">
          <span>Hello! I'm Aarti Jangra</span>A full stack web developer
        </h1>
        <p className="hero-para">
          I am a full stack web developer with experience in building web
          applications using JavaScript, React, Node.js, and MongoDB. I am
          passionate about coding and building user-friendly web applications. I
          am looking for a full-time role as a full stack web developer.
        </p>
        <div className="location">
          <div className="loc"> 
          <img className="loc" src={location} alt="" />
          <p>Haryana, India</p>
         
          </div>
          
        
        <div className="mail">
          <img src={mail} alt="" />
          <p>Aartjangra482@gmail.com</p>
        </div>
        
        </div>
        
        <div className="hero-btn">
          <a href="https://www.linkedin.com/in/aarti-jangra-044427220/"><button>View Linkedin</button></a>
          <a href="https://github.com/aartijangra"><button>View Github</button></a>
          
        </div>
      </div>
      <div>
        <img className="hero-img" src={myimg2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
