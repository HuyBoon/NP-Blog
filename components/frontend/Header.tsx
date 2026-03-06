import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full max-w-6xl flex justify-between items-center p-6">
            <Link
                href="/"
                className="flex items-center gap-2 text-accent text-3xl font-bold transition-transform hover:scale-105"
            >
                <h1>PiN - BLOG</h1>
            </Link>

            <div className="flex gap-6 text-accent text-2xl">
                <button
                    className="cursor-pointer hover:text-white transition-colors"
                    title="Contact"
                >
                    📞
                </button>
                <button
                    className="cursor-pointer hover:text-white transition-colors"
                    title="Location"
                >
                    📍
                </button>
            </div>
        </header>
    );
}
