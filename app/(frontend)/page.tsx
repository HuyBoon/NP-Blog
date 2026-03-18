"use client";
import Link from "next/link";
import Image from "next/image";
import { HOME_CARDS } from "@/constants";

export default function HomePage() {
    return (
        <div className="w-full flex flex-col items-center gap-10">
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-extrabold text-white">Hi !!!</h2>
                <p className="text-lg font-medium">
                    Life is full of exciting experiences.
                </p>
                <p className="text-lg font-medium">Never stop, it is me !!!</p>
            </div>

            <div className="w-full max-w-3xl relative aspect-video bg-black/50 rounded-2xl overflow-hidden border-2 border-border shadow-lg flex items-center justify-center group cursor-pointer">
                <h3 className="text-3xl font-bold z-10 text-center drop-shadow-md group-hover:scale-105 transition-transform">
                    Clip tự quay giới
                    <br />
                    thiệu bản thân
                </h3>
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full mt-10 pb-12 items-start">
                {HOME_CARDS.map((card, index) => {
                    const isOdd = index % 2 !== 0;
                    const transformClass = isOdd
                        ? "transform translate-y-8 md:translate-y-12"
                        : "transform md:translate-y-0";

                    return (
                        <NavCard
                            key={card.title}
                            href={card.href}
                            title={card.title}
                            subtitle={card.subtitle}
                            image={card.image}
                            className={transformClass}
                        />
                    );
                })}
            </div>
        </div>
    );
}

function NavCard({
    href,
    title,
    subtitle,
    image,
    disabled = false,
    className = "",
}: {
    href: string;
    title: string;
    subtitle?: string;
    image: string;
    disabled?: boolean;
    className?: string;
}) {
    return (
        <Link
            href={href}
            className={`relative aspect-2/3 rounded-xl overflow-hidden border border-border group transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(208,169,51,0.15)] ${
                disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"
            } ${className}`}
            onClick={(e) => disabled && e.preventDefault()}
        >
            <div className="absolute inset-0 aspect-2/3 group-hover:scale-110 transition-transform duration-500">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover opacity-70 "
                    sizes="(max-width: 768px) 50vw, 20vw"
                />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                {subtitle && (
                    <span className="text-xs font-semibold mb-2 text-white drop-shadow-md">
                        {subtitle}
                    </span>
                )}
                <div className="border-2 border-dashed border-accent p-2 rounded-md backdrop-blur-sm bg-black/20">
                    <span className="font-bold text-lg text-accent group-hover:text-white transition-colors drop-shadow-md">
                        {title}
                    </span>
                </div>
            </div>
        </Link>
    );
}
