"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT_INFO } from "@/constants";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-2 md:px-6 ">
                {/* Logo Area */}
                <Link
                    href="/"
                    className="flex items-center gap-2 transition-transform hover:scale-105 relative z-50"
                    onClick={closeMenu}
                >
                    <Image
                        src="/logo-main.png"
                        alt="PiN-Blog Logo"
                        // Cung cấp kích thước gốc theo tỷ lệ 2:1 (ví dụ: 120x60)
                        width={120}
                        height={60}
                        // h-10 cho mobile, md:h-12 cho desktop, w-auto để tự động co giãn theo chiều cao
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

                {/* Right Side: Icons & CTA */}
                <div className="flex items-center gap-5 relative z-50">
                    <div className="hidden sm:flex items-center gap-5 text-muted-foreground">
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

                    {/* Nút Hamburger cho Mobile */}
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

            {/* Mobile Navigation Dropdown */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/40 overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? "max-h-100 opacity-100 py-6"
                        : "max-h-0 opacity-0 py-0"
                }`}
            >
                <nav className="flex flex-col items-center gap-6">
                    {/* Render tự động Links cho Mobile */}
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

                    {/* Show contacts in mobile menu */}
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
