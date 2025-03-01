"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
            <div className="container-custom py-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="font-heading text-xl font-bold text-gray-800 dark:text-white">
                            Portfolio
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Creating beautiful, functional, and accessible web experiences.
                        </p>
                    </div>

                    <div className="flex space-x-4">
                        <SocialLink
                            href="https://github.com"
                            icon={<FiGithub className="h-5 w-5" />}
                            label="GitHub"
                        />
                        <SocialLink
                            href="https://linkedin.com"
                            icon={<FiLinkedin className="h-5 w-5" />}
                            label="LinkedIn"
                        />
                        <SocialLink
                            href="https://twitter.com"
                            icon={<FiTwitter className="h-5 w-5" />}
                            label="Twitter"
                        />
                        <SocialLink
                            href="mailto:contact@example.com"
                            icon={<FiMail className="h-5 w-5" />}
                            label="Email"
                        />
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            © {currentYear} Portfolio. All rights reserved.
                        </p>
                        <nav className="mt-4 md:mt-0">
                            <ul className="flex space-x-6">
                                {["Privacy", "Terms", "Sitemap"].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href="#"
                                            className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label={label}
        >
            {icon}
        </a>
    );
}