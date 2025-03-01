"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowDown, FiArrowRight, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center pt-16">
            {/* Background elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl" />
            </div>
            <div className="container-custom mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col space-y-8"
                    >
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4"
                            >
                                Computer Science Undergraduate
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-4xl md:text-6xl font-heading font-bold mb-4 leading-tight"
                            >
                                Aspiring <span className="text-primary">Software Engineer</span> seeking internship opportunities
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
                            >
                                I'm passionate about building impactful applications with modern technologies. Currently seeking internship opportunities to apply my skills and learn from industry professionals.
                            </motion.p>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link
                                href="#projects"
                                className="px-6 py-3 bg-primary text-white font-medium rounded-lg flex items-center gap-2 hover:bg-primary/90 transition-colors"
                            >
                                View My Projects <FiArrowRight />
                            </Link>
                            <Link
                                href="#contact"
                                className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                Contact Me
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="flex gap-4"
                        >
                            <a
                                href="https://github.com/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary hover:text-white transition-all"
                                aria-label="GitHub Profile"
                            >
                                <FiGithub size={20} />
                            </a>
                            <a
                                href="https://linkedin.com/in/yourusername"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-primary hover:text-white transition-all"
                                aria-label="LinkedIn Profile"
                            >
                                <FiLinkedin size={20} />
                            </a>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:ml-auto"
                    >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-80 blur-2xl" />
                        <div className="relative w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden flex items-center justify-center border-8 border-white dark:border-gray-700">
                            <div className="text-6xl font-bold text-gray-300 dark:text-gray-600">
                                Your<br />Photo
                            </div>
                            {/* Replace with Image component and your actual photo */}
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                >
                    <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll Down</span>
                    <Link
                        href="#about"
                        className="animate-bounce bg-white dark:bg-gray-700 p-2 rounded-full shadow-md"
                    >
                        <FiArrowDown className="text-gray-800 dark:text-gray-200" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}