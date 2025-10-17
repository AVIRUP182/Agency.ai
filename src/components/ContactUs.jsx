import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "ff162612-243c-403c-b26a-4b9ca2ed2c81");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for reaching out! We will get back to you soon.");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-us"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 pt-20 dark:text-white"
    >
      <Title
        title="Reach out to us"
        desc="From strategy to execution, we are here to help you every step of the way."
      />

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
      >
        {/* Name */}
        <div className="flex items-center gap-2 pl-3 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600">
          <img src={assets.person_icon} alt="" className="w-5" />
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full text-sm outline-none"
            required
          />
        </div>

        {/* Email */}
        <div className="flex items-center gap-2 pl-3 pr-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600">
          <img src={assets.email_icon} alt="" className="w-5" />
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full text-sm outline-none"
            required
          />
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <p className="mb-2 text-sm font-medium">Message</p>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message"
            className="w-full text-sm outline-none p-3 rounded-lg border border-gray-300 dark:border-gray-600"
            required
          />
        </div>

        {/* Subscribe Button */}
        <button
          type="submit"
          className="text-sm flex items-center justify-center gap-2 px-6 py-2 
            bg-blue-600 text-white font-semibold rounded-full cursor-pointer
            shadow-md hover:shadow-lg hover:scale-105
            transition-all duration-300 ease-in-out
            sm:col-span-2"
        >
          Subscribe
          <img src={assets.arrow_icon} alt="" className="w-4" />
        </button>
      </motion.form>
    </motion.div>
  );
};

export default ContactUs;
