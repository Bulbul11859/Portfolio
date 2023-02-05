import React from 'react'
import LineGradient from "../components/LineGradient";
import skillImage from '../assets/skills-image.png'
import { motion } from "framer-motion";

import SkillBar from 'react-skillbars';
import useMediaQuery from '../hook/useMediaQuery';

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const skills = [
    { type: 'HTML', level: 85 },
    { type: 'CSS', level: 80 },
    { type: 'Javascript', level: 75 },
    { type: 'Algo & DS', level: 72 },
    { type: 'React', level: 70 },
    { type: 'Node js', level: 65 },
    { type: 'Express', level: 60 },
    { type: 'Mongo DB', level: 55 },
    { type: 'Mongoose', level: 53 },
    { type: 'Redux', level: 20 }

  ];
  const colors = {
    bar: `linear-gradient(to right, #fa709a 0%, #fee140 100%)`,
    title: {
      text: "#fff",
      background: "#010026"
    }
  };
  

  return (
    <section id="skills" className="pt-10 pb-24">
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
           <p className='font-playfair font-semibold text-4xl mb-5'>
            My <span className='uppercase text-red'>Skill</span>
            
           </p>
           <LineGradient width='w-1/3'/>
           <p className='mt-10 mb-7'>
          I have in-depth knowledge of NodeJS, ExpressJS or Restify and have the ability to bind UI elements to JavaScript object models. I also have experience creating RESTful services with Node.js. 
           </p>
             
          </motion.div>
          <motion.div
           
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
          <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src={skillImage}
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={skillImage} />
          )}
        </div>
        </motion.div>
      </div>
      <motion.div className='mt-5'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
      >
      <SkillBar skills={skills} height={15} colors={colors}/>
      </motion.div>
    </section>
  )
}

export default MySkills
