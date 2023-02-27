import React from 'react'
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import project from '../assets/project-1.jpeg'
import project2 from '../assets/project-2.jpeg'
import AnchorLink from "react-anchor-link-smooth-scroll";



const Project = ({ Img,GitLink,tittle }) => {


  return (
   <>
<motion.div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.3 }}
  variants={{
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 }
  }}
>
    
    <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
    <img src={Img} className='group-hover:scale-125 transition-all duration-500  object-cover w-full'/>
    <div className='absolute -bottom-full left-1/2 group-hover:top-10 transition-all duration-500 z-50'>
  
      <span className='text-yellow text-lg lg:text-2xl cursor-pointer hover:text-red'>{tittle}</span> 
     
      </div>
    <motion.div className='absolute -bottom-full left-5 group-hover:bottom-10 transition-all duration-500 z-50'>
  
    <a
      className=" transition duration-500"
      href="https://www.linkedin.com/in/bulbul-rahman-38420b237"
      target="_blank"
      rel="noreferrer"
    >
      <span className='text-grey text-lg lg:text-2xl cursor-pointer hover:text-red'>Live Demo</span> 
    </a>
      
      </motion.div>
    <div className='absolute -bottom-full right-5 group-hover:bottom-10 transition-all duration-500 z-50'>
    <a
      className=" transition duration-500"
      href={GitLink}
      target="_blank"
      rel="noreferrer"
    >
      <span className='text-grey text-lg lg:text-2xl cursor-pointer hover:text-red'>Link</span> 
      </a>
      </div>
    </motion.div>
   </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="mt-28 pt-20 pb-48">
    {/* HEADINGS */}
    <motion.div
      className="md:w-2/5 mx-auto text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div>
        <p className="font-playfair font-semibold text-4xl">
          <span className="text-red">PRO</span>JECTS
        </p>
        <div className="flex justify-center mt-5">
          <LineGradient width="w-2/3" />
        </div>
      </div>
      <p className="mt-10 mb-10">
       Here is my some project
      </p>
    </motion.div>

    {/* PROJECTS */}
  <div>
    <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0  '>
      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      >
        <h1 className=' leading-tight text-yellow font-playfair mb-10 font-semibold text-4xl text-center md:text-center' >
          My Lastest <br/>
          work
        </h1>
          <div className='text-center md:text-center mb-10'>
        <AnchorLink
            className="bg-gradient-rainblue text-deep-blue  py-3 px-4 rounded-full font-semibold
              hover:bg-blue hover:text-white transition duration-500 "
              href="#contact"
          >
            View My All Project
          </AnchorLink>
          </div>
      </motion.div>
     <div className='flex flex-col gap-10  lg:grid lg:grid-cols-3 lg:gap-4 '>
      
      <Project Img={project2} GitLink={"https://www.linkedin.com/in/bulbul-rahman-38420b237"} tittle='My-Commerce'/>
      <Project Img={project2} GitLink={"https://www.linkedin.com/in/bulbul-rahman-38420b237"} />
      <Project Img={project2} GitLink={"https://www.linkedin.com/in/bulbul-rahman-38420b237"} />
      </div> 
      
    </div>
  </div>
  </section>
  )
}

export default Projects
