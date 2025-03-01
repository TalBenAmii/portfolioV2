"use client";
import { motion } from "framer-motion";
import { FiUser, FiCode, FiAward, FiBook, FiTarget } from "react-icons/fi";

export default function About() {
    const stats = [
        { icon: <FiBook />, value: "3.8", label: "GPA" },
        { icon: <FiCode />, value: "10+", label: "Course Projects" },
        { icon: <FiAward />, value: "5+", label: "Hackathons" },
    ];

    return (
        <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/30">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-heading font-bold mb-4"
                    >
                        About <span className="text-primary">Me</span>
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
                        Computer Science undergraduate with a passion for software development and problem-solving.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative aspect-square max-w-md mx-auto lg:mx-0"
                    >
                        <div className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-primary/20 to-accent/20 -z-10 transform rotate-3"></div>
                        <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-700 overflow-hidden shadow-xl flex items-center justify-center">
                            <div className="text-6xl font-bold text-gray-300 dark:text-gray-600">
                                Your<br />Photo
                            </div>
                            {/* Replace with Image component and your actual photo */}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-heading font-bold flex items-center gap-2">
                            <FiUser className="text-primary" /> Education & Background
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            I'm a Computer Science student at [Your University], currently in my [year] year with a focus on [your focus area, e.g., "web development and data structures"]. I combine strong theoretical foundations with hands-on project experience to build robust applications.
                        </p>

                        <h3 className="text-2xl font-heading font-bold flex items-center gap-2 mt-8">
                            <FiTarget className="text-primary" /> What I'm Looking For
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            I'm actively seeking software engineering internship opportunities where I can apply my knowledge, contribute to meaningful projects, and learn from experienced professionals. I'm particularly interested in [specific areas like web development, machine learning, etc.] and eager to grow in a collaborative environment.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md text-center"
                                >
                                    <div className="text-primary text-2xl mb-2 flex justify-center">
                                        {stat.icon}
                                    </div>
                                    <h4 className="text-2xl font-bold">{stat.value}</h4>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="mt-8"
                        >
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                            >
                                Download Resume <FiAward />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}