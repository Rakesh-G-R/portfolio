'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const nameAnimation = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
}

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', damping: 12, stiffness: 200 }
  }
}

const stackAnimation = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      yoyo: Infinity,
      repeatDelay: 5
    }
  }
}

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <div className="container mx-auto px-6 py-20 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            className="text-left md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl font-bold mb-4"
              variants={nameAnimation}
              initial="hidden"
              animate="visible"
            >
              {"Hi, I'm ".split('').map((char, index) => (
                <motion.span key={index} variants={letterAnimation}>{char}</motion.span>
              ))}
              <br />
              {"Rakesh GR".split('').map((char, index) => (
                <motion.span key={`name-${index}`} variants={letterAnimation} className="text-blue-400">
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.h2 
              className="text-3xl sm:text-4xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <motion.span
                variants={stackAnimation}
                initial="hidden"
                animate="visible"
                className="text-blue-400"
              >
                Full Stack
              </motion.span>{" "}
              &{" "}
              <motion.span
                variants={stackAnimation}
                initial="hidden"
                animate="visible"
                className="text-blue-400"
              >
                MERN Stack
              </motion.span>{" "}
              Developer
            </motion.h2>
            <p className="text-xl mb-8 text-gray-300">Transforming Ideas into Powerful Web Solutions</p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors text-lg inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <motion.div 
                className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="relative rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl shadow-blue-500/50"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Portfolio.jpeg"
                  alt="Rakesh GR"
                  width={400}
                  height={400}
                  className="rounded-full"
                  priority
                />
              </motion.div>
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full"
                animate={{
                  y: [-10, 10, -10],
                  x: [-10, 10, -10],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full"
                animate={{
                  y: [10, -10, 10],
                  x: [10, -10, 10],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

