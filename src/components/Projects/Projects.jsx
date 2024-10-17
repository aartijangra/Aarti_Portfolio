import React from 'react'
import './Projects.css'
import Projects_data from '../../assets/Projects_data.js'
const Projects = () => {
  return (
    <div className='Projects'>

      <div className='mywork-title'> My latest work </div>

      <div className='Projects-container'>
          {
            Projects_data.map((project,index)=>{
              return <img className='pro-img' key={index} src={project.w_img} alt="" />
            })
          }
      </div>
    </div>
  )
}

export default Projects
