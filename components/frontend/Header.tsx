"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/constants";

import { useLanguage } from "@/components/frontend/LanguageProvider";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const pathname = usePathname();
    const { lang, toggleLang } = useLanguage();

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    const isPortfolioPage = pathname === "/portfolio";

    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-2 md:px-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 transition-transform hover:scale-105 relative z-50"
                    onClick={closeMenu}
                >
                    <Image
                        src="/logo-main.png"
                        alt="PiN-Blog Logo"
                        width={120}
                        height={60}
                        className="object-contain h-14 w-auto md:h-18 drop-shadow-md"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-muted-foreground">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="hover:text-accent transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4 relative z-50">
                    {isPortfolioPage && (
                        <button
                            onClick={toggleLang}
                            className="flex items-center justify-center px-3 py-1.5 text-xs md:text-sm font-bold border border-accent text-accent rounded-full hover:bg-accent hover:text-black transition-all duration-300"
                            title="Đổi ngôn ngữ / Change Language"
                        >
                            {lang === "en" ? "🇻🇳 VI" : "🇬🇧 EN"}
                        </button>
                    )}

                    <div className="hidden sm:flex items-center gap-5 text-muted-foreground ml-2">
                        <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
                            title="Gửi Email"
                        >
                            <Mail size={20} />
                        </a>
                        <div
                            className="flex items-center cursor-help hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
                            title={CONTACT_INFO.location}
                        >
                            <MapPin size={20} />
                        </div>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-1 text-accent hover:text-white transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </div>

            <div
                className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/40 overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? "max-h-100 opacity-100 py-6"
                        : "max-h-0 opacity-0 py-0"
                }`}
            >
                <nav className="flex flex-col items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className="text-lg font-bold text-white hover:text-accent transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="flex gap-6 mt-2 text-muted-foreground sm:hidden">
                        <a
                            href={`mailto:${CONTACT_INFO.email}`}
                            className="hover:text-accent transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                        <div
                            className="flex items-center hover:text-accent transition-colors"
                            title={CONTACT_INFO.location}
                        >
                            <MapPin size={20} />
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
