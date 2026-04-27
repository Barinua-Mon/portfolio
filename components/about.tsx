'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, slideInFromLeftVariants, slideInFromRightVariants } from '@/lib/animation-variants'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code2, Palette, Zap } from 'lucide-react'

const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux'],
  backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs'],
  tools: ['Git', 'postman', 'Vercel', "Redux Toolkit", 'VS Code'],
}


export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a mission to create elegant solutions to complex problems
          </p>
        </motion.div>
        
        {/* mb-16 out */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          <motion.div variants={slideInFromLeftVariants}>
            <div className="prose dark:prose-invert">
              <p className="text-lg leading-relaxed text-foreground mb-4">
                I&apos;m a full-stack developer who is Passionate about building web applications.
                My journey in tech started with a passion for solving problems through code, and it has evolved
                into a deep expertise in modern web technologies.
              </p>
              <p className="text-lg leading-relaxed text-foreground mb-4">
                I specialize in creating beautiful, performant web applications using React, Next.js, and the MERN stack.
                I&apos;m obsessed with clean code, user experience, and staying up-to-date with the latest technologies.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                When I&apos;m not coding, you can find me exploring new tech trends, contributing to open-source projects,
                or sharing knowledge through technical writing.
              </p>
            </div>
          </motion.div>

          <motion.div variants={slideInFromRightVariants} className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle>Frontend</CardTitle>
                <Code2 className="w-5 h-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle>Backend</CardTitle>
                <Zap className="w-5 h-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <CardTitle>Tools & Platforms</CardTitle>
                <Palette className="w-5 h-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* <motion.div variants={itemVariants}>
          <h3 className="text-3xl font-bold mb-8 text-center">Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full mt-2"></div>
                  {index < experience.length - 1 && (
                    <div className="w-0.5 h-20 bg-border mt-4"></div>
                  )}
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <CardDescription>{exp.company}</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.year}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  )
}
