import React from 'react'
import assets from '../assets/assets'
import { motion } from "framer-motion";

const Footer = ({ theme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
      
      {/* footer top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
          
          <img
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            className='w-32 sm:w-44'
            alt="Agency Logo"
          />

          <p className='max-w-md'>
            From strategy to execution, we are here to help you every step of the way.
            We craft tailored solutions to meet your unique needs.
          </p>

          <ul className='flex gap-8'>
            <li>
              <a className='hover:text-blue-600 transition-colors duration-300 cursor-pointer' href="#hero">Home</a>
            </li>
            <li>
              <a className='hover:text-blue-600 transition-colors duration-300 cursor-pointer' href="#Services">Services</a>
            </li>
            <li>
              <a className='hover:text-blue-600 transition-colors duration-300 cursor-pointer' href="#OurWork">Our Work</a>
            </li>
            <li>
              <a className='hover:text-blue-600 transition-colors duration-300 cursor-pointer' href="#ContactUs">Contact Us</a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className='text-gray-600 dark:text-gray-400'>
          
          <h3 className='font-semibold'>Subscribe to our newsletter</h3>
          <p className='text-sm mt-2 mb-6'>
            Stay updated with our latest news, articles, resources, sent to your inbox weekly
          </p>

          <div className='flex gap-2 text-sm '>
            <input 
              type="email" 
              placeholder='Enter your email' 
              className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500' 
            />
            <button className="text-sm max-sm:hidden flex items-center gap-2 px-6 py-2 
            bg-gradient-to-r from-blue-500 to-indigo-600 
            text-white font-semibold rounded-full cursor-pointer
            border border-white/30 shadow-md 
            hover:shadow-lg hover:scale-105 hover:from-indigo-600 hover:to-blue-500
            transition-all duration-300 ease-in-out">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      <hr className='border-gray-300 dark:border-gray-600 my-6' />

      {/* Footer bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'
      >
        <p>Copyright 2025 © agency.ai - Avirup Sarkar - All Right Reserved</p>

        <div className='flex items-center justify-between gap-4'>
          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
            <img src={assets.facebook_icon} alt="Facebook" className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
          </a>
          <a href="https://facebook.com/avirup.sarkar.37266" target="_blank" rel="noopener noreferrer">
            <img src={assets.twitter_icon} alt="Twitter" className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
          </a>
          <a href="https://facebook.com/avirup.sarkar.37266" target="_blank" rel="noopener noreferrer">
            <img src={assets.instagram_icon} alt="Instagram" className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
          </a>
          <a href="https://linkedin.com/in/avirup-sarkar" target="_blank" rel="noopener noreferrer">
            <img src={assets.linkedin_icon} alt="LinkedIn" className="hover:scale-110 transition-transform duration-200 cursor-pointer" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer
