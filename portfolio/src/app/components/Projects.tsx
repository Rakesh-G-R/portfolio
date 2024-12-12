'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'Panasonic-Pioneers_062',
    description: 'Collaborated on building a MERN stack pet adoption platform, designing server-side APIs with Node.js and Express.js for seamless pet listings and user authentication.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    liveDemo: 'https://petpals-plus.netlify.app/',
    github: 'https://github.com/Sartik0709/Panasonic-Pioneers_062',
    image: './Petpasal.png'
  },
  {
    title: 'Tista-Method-019 ',
    description: 'Developed a motorcycle catalog using React and TypeScript with features like a dealer locator and test ride booking system for enhanced user engagement.',
    technologies: ['React', 'HTML', 'CSS', 'TypeScript'],
    liveDemo: 'https://tista.vercel.app/',
    github: 'https://github.com/ThakoorRishwanth/Tista-Method-019/tree/master/FrontEnd',
    image: './TistaMethod.png'
  },
  {
    title: 'Airbnb clone',
    description: 'Developed an Airbnb clone, replicating its visual layout and functionality for booking accommodations and exploring destinations.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveDemo: 'https://660ed2f31f56241d114e76cc--calm-bombolone-94435e.netlify.app/',
    github: 'https://github.com/BabakhalilM/Airbnb-clone-?tab=readme-ov-file',
    image: './Airbnb.png'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800 flex items-center">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12 text-blue-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
            >
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 hover:opacity-70 transition-opacity duration-300 flex items-end justify-center">
                  <div className="p-4 text-white text-center">
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition-colors">Live Demo</a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors">GitHub</a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

