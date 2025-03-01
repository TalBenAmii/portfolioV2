"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend, FiCalendar, FiFileText, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<{
        success: boolean;
        message: string;
    } | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        // This is a demo submission - in a real project, you would send this data to your server
        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setSubmitResult({
                success: true,
                message: "Message sent successfully! I'll get back to you soon.",
            });
            // Clear form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setSubmitResult({
                success: false,
                message: "Failed to send message. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <FiMail className="w-5 h-5" />,
            title: "Email",
            value: "your.email@university.edu",
            link: "mailto:your.email@university.edu",
        },
        {
            icon: <FiPhone className="w-5 h-5" />,
            title: "Phone",
            value: "+1 (123) 456-7890",
            link: "tel:+11234567890",
        },
        {
            icon: <FiMapPin className="w-5 h-5" />,
            title: "Location",
            value: "Your City, State, USA",
            link: "https://maps.google.com/?q=Your+City",
        },
    ];

    const quickLinks = [
        {
            icon: <FiFileText className="w-5 h-5" />,
            title: "Resume/CV",
            description: "Download my latest resume",
            link: "#",
        },
        {
            icon: <FiGithub className="w-5 h-5" />,
            title: "GitHub",
            description: "View my code repositories",
            link: "https://github.com/yourusername",
        },
        {
            icon: <FiLinkedin className="w-5 h-5" />,
            title: "LinkedIn",
            description: "Connect with me professionally",
            link: "https://linkedin.com/in/yourusername",
        },
        {
            icon: <FiCalendar className="w-5 h-5" />,
            title: "Schedule a Call",
            description: "Book a time to discuss opportunities",
            link: "#",
        },
    ];

    return (
        <section id="contact" className="section-padding">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-heading font-bold mb-4"
                    >
                        Contact <span className="text-primary">Me</span>
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
                        I'm actively seeking internship opportunities! Feel free to reach out to discuss how I can bring value to your team.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <h3 className="text-2xl font-heading font-bold mb-6">Send a Message</h3>
                            {submitResult && (
                                <div
                                    className={`mb-6 p-4 rounded-lg ${submitResult.success
                                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                                        : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                                        }`}
                                >
                                    {submitResult.message}
                                </div>
                            )}
                            <form onSubmit={handleSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                            Subject
                                        </label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange as any}
                                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="Internship Opportunity">Internship Opportunity</option>
                                            <option value="Project Collaboration">Project Collaboration</option>
                                            <option value="Networking">Networking</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary/50 dark:bg-gray-700 dark:text-white"
                                            required
                                            placeholder="I'm interested in discussing potential internship opportunities..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                Send Message <FiSend />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col space-y-8"
                    >
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="bg-primary/10 text-primary p-3 rounded-lg">
                                            {info.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium mb-1">{info.title}</h4>
                                            <a
                                                href={info.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                                            >
                                                {info.value}
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                            <h3 className="text-2xl font-heading font-bold mb-6">Quick Links</h3>
                            <div className="space-y-4">
                                {quickLinks.map((link, index) => (
                                    <motion.a
                                        key={index}
                                        href={link.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        <div className="bg-primary/10 text-primary p-2 rounded-lg">
                                            {link.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-medium">{link.title}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{link.description}</p>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-primary to-accent p-6 rounded-xl shadow-lg text-white">
                            <h3 className="text-xl font-bold mb-3">Available for Internships</h3>
                            <p className="mb-4">Looking for a motivated intern who is eager to learn and contribute? I'm available starting [Month Year].</p>
                            <a
                                href="#"
                                className="inline-block px-4 py-2 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-colors"
                            >
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}