import React from "react";
import { useForm } from "react-hook-form";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Img from '../assets/contact-image.jpeg'

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <section id="contact" className="py-48">
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50},
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5">
          CON<span className="uppercase text-red">tact</span>
        </p>
        <LineGradient width="w-1/3" />
        <p className="mt-10 mb-7 text-yellow">
          Contact Me To Get Started
        </p>
      </motion.div>

      <div className="md:flex md:justify-between gap-16 mt-5">
      <motion.div
        className="basic1/2 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50},
          visible: { opacity: 1, x: 0 },
        }}>
       <img src={Img}/>
        </motion.div>



      </div>
    </section>
  );
};

export default Contact;
