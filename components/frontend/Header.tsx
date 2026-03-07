"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MapPin, Menu, X } from "lucide-react";

export default function Header() {
    // Quản lý trạng thái đóng/mở của Mobile Menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Hàm đổi trạng thái (Toggle)
    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
    // Hàm đóng menu khi click vào 1 link
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4 md:px-6 md:py-4">
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center gap-1.5 text-2xl md:text-3xl font-extrabold tracking-tight transition-transform hover:scale-105 relative z-50"
                    onClick={closeMenu}
                >
                    <span className="text-white">PiN</span>
                    <span className="text-accent">- BLOG</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-muted-foreground">
                    <Link
                        href="/portfolio"
                        className="hover:text-accent transition-colors duration-300"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/life"
                        className="hover:text-accent transition-colors duration-300"
                    >
                        Life
                    </Link>
                    <Link
                        href="/art"
                        className="hover:text-accent transition-colors duration-300"
                    >
                        Art
                    </Link>
                </nav>

                {/* Right Side: Icons & CTA */}
                <div className="flex items-center gap-5 relative z-50">
                    <div className="hidden sm:flex items-center gap-5 text-muted-foreground">
                        <a
                            href="mailto:hello@pinblog.com"
                            className="hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <Mail size={20} />
                        </a>
                        <div
                            className="flex items-center cursor-help hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
                            title="Hồ Chí Minh, Việt Nam"
                        >
                            <MapPin size={20} />
                        </div>
                    </div>

                    {/* Nút Hamburger cho Mobile (Có đổi icon) */}
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

            {/* Mobile Navigation Dropdown (Màn che sổ xuống) */}
            {/* Dùng transition để hiệu ứng trượt mượt mà */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border/40 overflow-hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                        ? "max-h-100 opacity-100 py-6"
                        : "max-h-0 opacity-0 py-0"
                }`}
            >
                <nav className="flex flex-col items-center gap-6">
                    <Link
                        href="/portfolio"
                        onClick={closeMenu}
                        className="text-lg font-bold text-white hover:text-accent transition-colors"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="/life"
                        onClick={closeMenu}
                        className="text-lg font-bold text-white hover:text-accent transition-colors"
                    >
                        Life
                    </Link>
                    <Link
                        href="/art"
                        onClick={closeMenu}
                        className="text-lg font-bold text-white hover:text-accent transition-colors"
                    >
                        Art
                    </Link>

                    {/* Show Admin button & contacts in mobile menu too */}
                    <div className="flex gap-6 mt-2 text-muted-foreground sm:hidden">
                        <a
                            href="mailto:hello@pinblog.com"
                            className="hover:text-accent transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                        <div className="flex items-center hover:text-accent transition-colors">
                            <MapPin size={20} />
                        </div>
                    </div>

                    <Link
                        href="/login"
                        onClick={closeMenu}
                        className="mt-2 px-8 py-2.5 text-xs font-bold uppercase tracking-wider bg-accent text-accent-foreground rounded-full hover:bg-accent/80 transition-all duration-300"
                    >
                        Vào Admin
                    </Link>
                </nav>
            </div>
        </header>
    );
}
