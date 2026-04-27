'use client'

import { motion } from 'framer-motion'
import { itemVariants } from '@/lib/animation-variants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-12 px-4 bg-card/50">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-lg font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-2">
              {"Barinua"}
            </div>
            <p className="text-sm text-muted-foreground">
              Building amazing web experiences, one line of code at a time.
            </p>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} All rights reserved.</p>
            <p className="mt-1">Made with <span className="text-primary">❤</span> using Next.js & Framer Motion</p>
          </div>

          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="https://x.com/Baron96795712" className="hover:text-primary transition-colors">Twitter</a>
            <span>•</span>
            <a href="https://github.com/Barinua-Mon" className="hover:text-primary transition-colors">GitHub</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/barinua-mon" className="hover:text-primary transition-colors">LinkedIn</a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
