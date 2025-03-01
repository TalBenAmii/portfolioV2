"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub, FiTag } from "react-icons/fi";

const projects = [
    {
        title: "E-Commerce Platform",
        description:
            "A full-featured e-commerce platform with product catalog, shopping cart, user authentication, and payment processing.",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        image: "/placeholder-project.jpg",
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Task Management App",
        description:
            "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
        image: "/placeholder-project.jpg",
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "AI Content Generator",
        description:
            "An AI-powered application that generates marketing copy, blog posts, and social media content based on user prompts.",
        tags: ["React", "OpenAI API", "Node.js", "Express"],
        image: "/placeholder-project.jpg",
        liveUrl: "#",
        githubUrl: "#",
    },
    {
        title: "Fitness Tracker",
        description:
            "A mobile-responsive fitness tracking app that allows users to track workouts, set goals, and visualize progress over time.",
        tags: ["React Native", "Firebase", "Chart.js", "Redux"],
        image: "/placeholder-project.jpg",
        liveUrl: "#",
        githubUrl: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800/30">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-heading font-bold mb-4"
                    >
                        My <span className="text-primary">Projects</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-24 h-1 bg-primary mx-auto mb-6"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Here are some of my recent projects that showcase my skills and expertise.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        <FiGithub /> View More Projects
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-shadow duration-300"
        >
            <div className="h-64 relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 text-xl font-medium">
                    Project Image
                </div>
                {/* Uncomment and use actual images when available
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
        */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-3">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                            aria-label="View live site"
                        >
                            <FiExternalLink />
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors"
                            aria-label="View source code"
                        >
                            <FiGithub />
                        </a>
                    </div>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, tagIndex: number) => (
                        <span
                            key={tagIndex}
                            className="inline-flex items-center gap-1 text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
                        >
                            <FiTag className="w-3 h-3" /> {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}