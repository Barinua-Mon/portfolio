'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animation-variants'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-4000"></div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Full Stack Developer
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          I build beautiful, responsive web applications with{' '}
          <span className="font-semibold text-foreground">Next.js</span>,{' '}
          <span className="font-semibold text-foreground">React</span>, and the{' '}
          <span className="font-semibold text-foreground">MERN stack</span>
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Crafting digital experiences that are intuitive, performant, and visually stunning. Let&apos;s create something amazing together.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-20 flex justify-center items-center gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">3+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="w-px h-12 bg-border"></div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="w-px h-12 bg-border"></div>
          {/* <div className="text-center">
            <div className="text-3xl font-bold text-primary">1+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div> */}
        </motion.div>
      </motion.div>
    </section>
  )
}
