"use client";

import { motion } from "framer-motion";
import {
    FiLayout,
    FiServer,
    FiDatabase,
    FiTool
} from "react-icons/fi";
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiAmazon,
    SiDocker
} from "react-icons/si";

const categories = [
    {
        name: "Frontend",
        icon: <FiLayout className="text-2xl" />,
        skills: [
            { name: "React", icon: <SiReact />, level: 90 },
            { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
            { name: "TypeScript", icon: <SiTypescript />, level: 80 },
            { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 }
        ]
    },
    {
        name: "Backend",
        icon: <FiServer className="text-2xl" />,
        skills: [
            { name: "Node.js", icon: <SiNodedotjs />, level: 85 },
            { name: "Express", icon: null, level: 80 },
            { name: "REST API", icon: null, level: 90 },
            { name: "GraphQL", icon: null, level: 75 }
        ]
    },
    {
        name: "Database",
        icon: <FiDatabase className="text-2xl" />,
        skills: [
            { name: "MongoDB", icon: <SiMongodb />, level: 85 },
            { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
            { name: "Redis", icon: null, level: 70 },
            { name: "SQL", icon: null, level: 85 }
        ]
    },
    {
        name: "DevOps",
        icon: <FiTool className="text-2xl" />,
        skills: [
            { name: "AWS", icon: <SiAmazon />, level: 75 },
            { name: "Docker", icon: <SiDocker />, level: 80 },
            { name: "CI/CD", icon: null, level: 75 },
            { name: "Git", icon: null, level: 90 }
        ]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="section-padding">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-heading font-bold mb-4"
                    >
                        My <span className="text-primary">Skills</span>
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
                        Here are my technical skills and proficiency levels in various technologies.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-primary/10 text-primary p-3 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-heading font-semibold">{category.name}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                {skill.icon && (
                                                    <span className="text-lg text-gray-600 dark:text-gray-300">
                                                        {skill.icon}
                                                    </span>
                                                )}
                                                <span className="font-medium">{skill.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.1 + skillIndex * 0.1 }}
                                                className="h-full bg-primary rounded-full"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}