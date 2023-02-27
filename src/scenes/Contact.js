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
    
        <form className="lg:w-[500px]">
          <div className="mb-2">
            <label>
              <span className="text-red">Your name</span>
              <input
                type="text"
                name="name"
                className="

            w-full
            block px-16 py-2 mt-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="John cooks"
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span className="text-red">Email address</span>
              <input
                name="email"
                type="email"
                className="
            block
            w-full
            mt-2 px-16 py-2
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                placeholder="john.cooks@example.com"
                required
              />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <span class="text-red">Message</span>
              <textarea
                name="message"
                className="
            block
            w-full
            mt-2 px-16 py-8
            border-gray-300
            rounded-md
            shadow-sm
            focus:border-indigo-300
            focus:ring
            focus:ring-indigo-200
            focus:ring-opacity-50
          "
                rows="5"
              ></textarea>
            </label>
          </div>

          <div class="mb-6">
            <button
              type="submit"
              className="
            h-10
            px-5
            text-indigo-100
            bg-indigo-700
            rounded-lg
            transition-colors
            duration-150
            focus:shadow-outline
            hover:bg-indigo-800
          "
            >
              Contact Us
            </button>
          </div>
          <div></div>
        </form>
      
    
        </motion.div>



      </div>
    </section>
  );
};

export default Contact;
