import React from "react";
import "./Hero.css";
import myimg from "../../assets/myimg.jpg";
import myimg2 from "../../assets/myimg2.jpg";


const Hero = () => {
  return (
    <div className="hero">
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
        <div className="hero-btn">
          <button>View Linkedin</button>
          <button>View Github</button>
        </div>
      </div>
      <div>
        <img className="hero-img" src={myimg2} alt="" />
      </div>
    </div>
  );
};

export default Hero;
