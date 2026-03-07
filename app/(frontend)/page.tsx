"use client";
import Link from "next/link";

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

            {/* Video Box */}
            <div className="w-full max-w-3xl relative aspect-video bg-black/50 rounded-2xl overflow-hidden border-2 border-border shadow-lg flex items-center justify-center group cursor-pointer">
                <h3 className="text-3xl font-bold z-10 text-center drop-shadow-md group-hover:scale-105 transition-transform">
                    Clip tự quay giới
                    <br />
                    thiệu bản thân
                </h3>
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors"></div>
            </div>

            {/* Navigation Cards - Thêm pb-12 để phần bị đẩy xuống không bị cắt lẹm */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full mt-10 pb-12 items-start">
                {/* Thẻ 1: Nằm bình thường */}
                <NavCard
                    href="/portfolio"
                    title="All Of Work"
                    className="transform md:translate-y-0"
                />

                {/* Thẻ 2: Đẩy xuống (so le) */}
                <NavCard
                    href="/life"
                    title="My Life"
                    className="transform translate-y-8 md:translate-y-12"
                />

                {/* Thẻ 3: Nằm bình thường */}
                <NavCard
                    href="/art"
                    title="ART"
                    className="transform md:translate-y-0"
                />

                {/* Thẻ 4: Đẩy xuống (so le) */}
                <NavCard
                    href="#"
                    title="Love"
                    subtitle="Coming soon"
                    disabled
                    className="transform translate-y-8 md:translate-y-12"
                />

                {/* Thẻ 5: Nằm bình thường */}
                <NavCard
                    href="#"
                    title="Shop"
                    subtitle="Coming soon"
                    disabled
                    className="transform md:translate-y-0"
                />
            </div>
        </div>
    );
}

function NavCard({
    href,
    title,
    subtitle,
    disabled = false,
    className = "", // Nhận thêm custom class từ bên ngoài
}: {
    href: string;
    title: string;
    subtitle?: string;
    disabled?: boolean;
    className?: string;
}) {
    return (
        <Link
            href={href}
            /* Ghép className truyền vào để kích hoạt hiệu ứng so le */
            className={`relative aspect-3/4 rounded-xl overflow-hidden border border-border group transition-all duration-300 hover:border-accent hover:shadow-[0_0_20px_rgba(208,169,51,0.15)] ${disabled ? "cursor-not-allowed opacity-70" : "cursor-pointer"} ${className}`}
            onClick={(e) => disabled && e.preventDefault()}
        >
            <div className="absolute inset-0 bg-secondary group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                {subtitle && (
                    <span className="text-xs font-semibold mb-2 text-white">
                        {subtitle}
                    </span>
                )}
                <div className="border-2 border-dashed border-accent p-2 rounded-md">
                    <span className="font-bold text-lg text-accent group-hover:text-white transition-colors">
                        {title}
                    </span>
                </div>
            </div>
        </Link>
    );
}
