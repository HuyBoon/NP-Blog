import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-border bg-background pt-16 pb-8 mt-auto">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                <div className="space-y-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 transition-transform hover:scale-105 relative z-50"
                    >
                        <h2 className="text-3xl font-extrabold tracking-tight drop-shadow-md">
                            <span className="text-white">PIN</span>
                            <span className="text-accent">-BLOG</span>
                        </h2>
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                        Life is full of exciting experiences. Never stop, it is
                        me !!!
                    </p>
                </div>
                <div className="space-y-4 md:pl-8">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                        Khám phá
                    </h3>
                    <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                        <li>
                            <Link
                                href="/portfolio"
                                className="hover:text-accent hover:pl-2 transition-all duration-300 flex items-center gap-2"
                            >
                                <span className="text-accent text-xs">▹</span>{" "}
                                All Of Work
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/life"
                                className="hover:text-accent hover:pl-2 transition-all duration-300 flex items-center gap-2"
                            >
                                <span className="text-accent text-xs">▹</span>{" "}
                                My Life
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/art"
                                className="hover:text-accent hover:pl-2 transition-all duration-300 flex items-center gap-2"
                            >
                                <span className="text-accent text-xs">▹</span>{" "}
                                Art
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                        Kết nối
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                        <li className="flex items-center gap-3">
                            <MapPin size={18} className="text-accent" />
                            <span>Hồ Chí Minh, Việt Nam</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-accent" />
                            <a
                                href="mailto:hello@pinblog.com"
                                className="hover:text-accent transition-colors"
                            >
                                hello@pinblog.com
                            </a>
                        </li>
                    </ul>

                    <div className="flex gap-3 pt-2">
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 bg-secondary rounded-full text-white hover:bg-accent hover:text-black hover:-translate-y-1 transition-all duration-300"
                            title="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 bg-secondary rounded-full text-white hover:bg-accent hover:text-black hover:-translate-y-1 transition-all duration-300"
                            title="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 bg-secondary rounded-full text-white hover:bg-accent hover:text-black hover:-translate-y-1 transition-all duration-300"
                            title="Facebook"
                        >
                            <Facebook size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-secondary flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground/60">
                <p>
                    © {new Date().getFullYear()} PiN-Blog. All rights reserved.
                </p>
                <p className="flex items-center gap-1.5">
                    Designed & Coded with{" "}
                    <span className="text-destructive animate-pulse">❤️</span>
                </p>
            </div>
        </footer>
    );
}
