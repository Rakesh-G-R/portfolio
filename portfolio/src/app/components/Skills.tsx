'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const skills = [
  {
    category: "Frontend",
    items: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored', level: 90 },
      { name: 'React', icon: 'devicon-react-original colored', level: 95 },
      { name: 'Next.js', icon: 'devicon-nextjs-original', level: 85 },
      { name: 'HTML5', icon: 'devicon-html5-plain colored', level: 95 },
      { name: 'CSS3', icon: 'devicon-css3-plain colored', level: 90 },
      { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-plain colored', level: 88 },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored', level: 85 },
      { name: 'Java', icon: 'devicon-java-plain colored', level: 80 },
      { name: 'Spring Boot', icon: 'devicon-spring-plain colored', level: 75 },
    ]
  },
  {
    category: "Database",
    items: [
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', level: 85 },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored', level: 80 },
    ]
  }
]

const tools = [
  { name: 'VS Code', icon: 'devicon-vscode-plain colored', description: 'Primary Code Editor' },
  { name: 'IntelliJ IDEA', icon: 'devicon-intellij-plain colored', description: 'Java Development' },
  { name: 'GitHub', icon: 'devicon-github-original', description: 'Version Control' },
  { name: 'Vercel', icon: 'devicon-vercel-plain', description: 'Deployment Platform' },
  { name: 'Netlify', icon: 'devicon-netlify-plain colored', description: 'Hosting Platform' },
]

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <section id="skills" className="min-h-screen py-32 bg-gradient-to-b from-gray-900 via-blue-900/10 to-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      </div>

      <motion.div
        ref={containerRef}
        style={{ opacity, scale }}
        className="container mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Skills & Tools
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My technical expertise and the tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-6">{skillCategory.category}</h3>
              <div className="space-y-6">
                {skillCategory.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center mb-2">
                      <i className={`${skill.icon} text-2xl mr-3 group-hover:scale-110 transition-transform`}></i>
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-8 text-center">Development Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors group"
              >
                <i className={`${tool.icon} text-4xl mb-3 group-hover:scale-110 transition-transform`}></i>
                <h4 className="text-gray-200 font-medium text-center">{tool.name}</h4>
                <p className="text-gray-400 text-sm text-center mt-2">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
