'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800 flex items-center">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative group">
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-300"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <div className="relative">
                <Image
                  src="/Portfolio.jpeg"
                  alt="Rakesh GR"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-lg" />
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg shadow-xl border border-gray-700">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Professional Journey</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  As a passionate Full Stack and MERN Stack developer, I bring creativity and technical expertise to every project. My journey in web development has been driven by a constant desire to learn and innovate.
                </p>
                <p className="text-lg text-gray-300">
                  I specialize in building scalable web applications using modern technologies like React, Next.js, Node.js, and Spring Boot. My experience spans both front-end and back-end development, allowing me to create comprehensive solutions.
                </p>
                <p className="text-lg text-gray-300">
                  What sets me apart is my attention to detail and commitment to writing clean, maintainable code. I believe in creating applications that not only function flawlessly but also provide an exceptional user experience.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.div 
                  className="px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-blue-400">Problem Solver</span>
                </motion.div>
                <motion.div 
                  className="px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-purple-400">Clean Code Advocate</span>
                </motion.div>
                <motion.div 
                  className="px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-green-400">Continuous Learner</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

