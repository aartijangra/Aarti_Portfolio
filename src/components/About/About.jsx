import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='About'>
      <h1 className='about-head'>ABOUT ME</h1>
      <div className='about-para'>
        <p>Hi, I'm Aarti, a passionate Web Developer with a focus on creating responsive and user-friendly websites. Currently pursuing my Master of Computer Applications (MCA), I have developed a solid foundation in web technologies and have experience working with modern web development stacks like MERN (MongoDB, Express.js, React.js, and Node.js).</p>
        <p>With a keen eye for detail and a drive for excellence, I am always looking to tackle new challenges in web development, create impactful user experiences, and bring innovative ideas to life.</p>
      </div>
      <div className='about-skills'>
        <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
        <div className='about-skill'><p>JavaScript</p><hr style={{width:"70%"}} /></div>
        <div className='about-skill'><p>React.js</p><hr style={{width:"60%"}} /></div>
        <div className='about-skill'><p>Database</p><hr style={{width:"60%"}} /></div>
        <div className='about-skill'><p>Server Side</p><hr style={{width:"50%"}} /></div>
        <div className='about-skill'><p>C++</p><hr style={{width:"67%"}} /></div>
        <div className='about-skill'><p>Version control</p><hr style={{width:"80%"}} /></div>
      </div>
    </div>
  )
}

export default About
