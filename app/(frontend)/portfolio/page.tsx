"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useLanguage } from "@/components/frontend/LanguageProvider";
import { portfolioData } from "@/constants/dictionaries";

type Experience = {
    id: number;
    company: string;
    role: string;
    description: string;
    image: string;
    imagePlaceholder: string;
};

export default function PortfolioPage() {
    const { lang } = useLanguage();
    const content = portfolioData[lang];

    const [selectedItem, setSelectedItem] = useState<Experience | null>(null);

    return (
        <div className="w-full flex flex-col items-center animate-fade-in pb-20 relative">
            <h1 className="text-5xl font-extrabold text-white mt-8">
                {content.title1}{" "}
                <span className="text-accent">{content.title2}</span>
            </h1>

            <section className="text-center space-y-6 max-w-4xl mt-12 mb-8 px-4">
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
                    {content.intro}
                </p>
            </section>

            <div className="w-full max-w-4xl px-4 mb-12">
                <div className="relative w-full aspect-21/9 md:aspect-3/1 bg-secondary rounded-lg overflow-hidden border border-border/50 flex items-center justify-center shadow-lg">
                    <Image
                        src="/experience/quote-bg.png"
                        alt="Quote Background"
                        fill
                        className="object-cover opacity-60 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                    <h3 className="relative z-10 text-center text-white font-medium text-sm md:text-lg max-w-2xl px-6 italic drop-shadow-md">
                        {content.quote}
                    </h3>
                </div>
            </div>

            <section className="w-full border-y border-border py-8 overflow-hidden bg-secondary/30">
                <div className="flex justify-center gap-12 md:gap-24 flex-wrap px-4">
                    {content.partners.map((partner, idx) => (
                        <div
                            key={idx}
                            className="text-2xl font-bold text-muted-foreground hover:text-accent transition-colors cursor-default"
                        >
                            {partner}
                        </div>
                    ))}
                </div>
            </section>

            <div className="w-full h-px bg-accent/30 mb-1"></div>
            <div className="w-full h-0.5 bg-accent mb-12 shadow-[0_0_10px_rgba(208,169,51,0.5)]"></div>

            <section className="w-full max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {content.experiences.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className="group flex flex-col bg-transparent border border-border/60 hover:border-accent transition-all duration-300 hover:shadow-[0_0_15px_rgba(208,169,51,0.15)] cursor-pointer"
                    >
                        <div className="w-full aspect-video relative overflow-hidden bg-secondary border-b border-border/60">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-black text-muted-foreground opacity-30 tracking-widest">
                                    {item.imagePlaceholder}
                                </span>
                            </div>

                            <Image
                                src={item.image}
                                alt={item.company}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 relative z-10"
                            />
                        </div>

                        <div className="p-5 flex flex-col flex-1 pointer-events-none">
                            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide group-hover:text-accent transition-colors">
                                {item.company}
                            </h3>

                            <h4 className="text-sm font-semibold text-accent mt-1 mb-3">
                                {item.role}
                            </h4>

                            <p className="text-muted-foreground text-sm leading-relaxed flex-1 line-clamp-2">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </section>

            {selectedItem && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
                        onClick={() => setSelectedItem(null)}
                    ></div>

                    <div className="relative w-full max-w-3xl bg-card border border-border rounded-xl overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
                        <button
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-accent text-white hover:text-black rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>

                        <div className="w-full aspect-21/9 sm:aspect-video relative bg-secondary shrink-0">
                            <Image
                                src={selectedItem.image}
                                alt={selectedItem.company}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6 md:p-10 overflow-y-auto space-y-4 bg-background">
                            <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">
                                {selectedItem.company}
                            </h3>
                            <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
                                <h4 className="text-base font-semibold text-accent">
                                    {selectedItem.role}
                                </h4>
                            </div>
                            <div className="w-16 h-1 bg-accent/50 rounded-full mt-6 mb-4"></div>
                            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                                {selectedItem.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
