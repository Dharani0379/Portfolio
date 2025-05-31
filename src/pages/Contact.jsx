import React from 'react'
import Navbar from '../component/navbar'
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Send,
  Copyright,
  Linkedin,
  Github
} from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Contact() {
  const heading = 'Get in Touch'

  return (
    <div className="w-screen h-full md:h-screen bg-black flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center px-6 py-12 text-white">
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-10 flex flex-wrap justify-center"
        >
          {heading.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <div className="w-full max-w-xl bg-gray-800 rounded-xl p-6 shadow-lg space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium flex justify-center items-center gap-2 hover:scale-105 transition-transform">
            <Send size={18} /> Send Message
          </button>
        </div>

        <footer className="mt-12 w-full flex flex-col items-center gap-4 text-gray-400">
          <div className="flex flex-wrap gap-6 justify-center text-white text-lg">
            <a href="https://www.instagram.com/invites/contact/?igsh=jwzq7aajf2v4&utm_content=hvho3x3" className="hover:text-pink-500 transition-colors"><Instagram size={24} /></a>
            <a href="https://wa.me/916374750379" className="hover:text-green-400 transition-colors"><FaWhatsapp size={24} /></a>
            <a href="www.linkedin.com/in/dharanidharan-g" className="hover:text-blue-400 transition-colors"><Linkedin size={24} /></a>
            <a href="https://github.com/Dharani0379" className="hover:text-gray-300 transition-colors"><Github size={24} /></a>
            <a href="mail to:dharanidharan4472@gmail.com" className="hover:text-yellow-300 transition-colors"><Mail size={24} /></a>
            <a href="tel:+91 6374750379" className="hover:text-green-300 transition-colors"><Phone size={24} /></a>
          </div>
          <div className="text-sm flex items-center gap-2 mt-2">
            <Copyright size={14} />
            <span>2025 Dharanidharan. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Contact
