import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function ComingSoon({
    title,
    description,
}: {
    title: string;
    description?: string;
}) {
    return (
        <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4 animate-in fade-in zoom-in duration-700 mt-10">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-8 border border-accent/20 shadow-[0_0_30px_rgba(208,169,51,0.2)]">
                <Sparkles className="w-10 h-10 text-accent animate-pulse" />
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                {title}{" "}
                <span className="text-accent block mt-2 sm:inline sm:mt-0">
                    Coming Soon
                </span>
            </h1>

            <p className="text-muted-foreground text-lg mb-10 max-w-md leading-relaxed">
                {description ||
                    "Chuyên mục này đang được xây dựng và sẽ sớm ra mắt. Cùng chờ đón nhé!"}
            </p>

            <Link
                href="/"
                className="flex items-center gap-2 px-8 py-3 bg-accent text-accent-foreground rounded-full font-bold hover:bg-accent/80 hover:-translate-y-1 transition-all duration-300"
            >
                <ArrowLeft size={20} />
                Quay lại trang chủ
            </Link>
        </div>
    );
}
