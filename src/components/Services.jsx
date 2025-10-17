import React from 'react'
import assets from '../assets/assets';
import Title from './Title';
import ServiceCard from './ServiceCard';
import { motion } from "framer-motion";

const Services = () => {


    const servicesData = [
      {
        title: "Advertising",
        description: "We turn bold ideas into powerful digital solutions that connect, engage...",
        icon: assets.ads_icon
      },
      {
        title: "Content Marketing",
        description: "We craft compelling content strategies that drive engagement and conversions.",
        icon: assets.marketing_icon
      },
      {
        title: "Content Writing",
        description: "We create high-quality, engaging content that resonates with your audience.",
        icon: assets.content_icon
      },
      {
        title: "Social Media Management",
        description: "We manage your social media presence to enhance brand visibility and engagement.",
        icon: assets.social_icon
      },
    ];

  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.2 }}

     id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark-hidden' />

        <Title title='How can we help?' desc='From strategy to execution, we’ve got you covered.' />

        <div  className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index) => (
                <ServiceCard key={index} service={service}  />
            ))}
        </div>

    </motion.div>
  )
}

export default Services
