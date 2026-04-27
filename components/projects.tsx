'use client'

import { motion } from 'framer-motion'
import { containerVariants, itemVariants, hoverScaleVariants } from '@/lib/animation-variants'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Job Board Website',
    description: 'A full-featured job board platform built with Next.js and Postgresql',
    tags: ['Next.js', 'React', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    image: '/the-job-board.png',
    liveUrl: 'https://modern-job-board-r86l.vercel.app/',
    githubUrl: 'https://github.com/Barinua-Mon/Modern-jobBoard',
  },
  {
    id: 2,
    title: 'React Movie App',
    description: "A Movie app where you can search, rate and also displays a list of watched movies.",
    tags: ["React", "Css Module"],
    image: '/usePopcon.png',
    liveUrl: 'https://movie-app-alpha-rosy.vercel.app',
    githubUrl: 'https://github.com/Barinua-Mon/Movie-App',
  },
  {
    id: 3,
    title: 'E-commerce website',
    description: 'A job board website that connects Bussiness owners and contractors with potential employees.',
    tags: ["Next.js", "Supabase", "Tailwind Css"],
    image: '/the-wild-oasis.png',
    liveUrl: 'https://the-wild-oasis-website-delta-lovat.vercel.app',
    githubUrl: 'https://github.com/Barinua-Mon/The-wild-oasis-website',
  },

]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my expertise in full-stack development
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover="hover"
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-40 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black/0"
                    whileHover={{ backgroundColor: 'rgba(0,0,0,0.2)' }}
                  />
                </div>

                <CardHeader className="flex-grow">
                  <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} className="flex items-center justify-center gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
