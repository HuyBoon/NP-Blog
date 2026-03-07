import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Authentication - PiN-Blog",
    description: "Secure login for PiN-Blog ecosystem.",
};

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex min-h-screen flex-col bg-background text-foreground">
            {/* --- HEADER (Floating) --- */}
            <header className="absolute top-0 left-0 w-full z-50 p-4 md:p-8 flex items-center justify-between">
                {/* Nút quay về trang chủ (Hover chuyển sang màu Vàng) */}
                <Link
                    href="/"
                    className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                    <ArrowLeft size={20} />
                    <span className="hidden sm:inline font-bold">
                        Back to Home
                    </span>
                </Link>

                {/* Logo nhỏ góc phải cho đồng bộ thương hiệu */}
                <div className="font-bold text-accent text-xl tracking-wider">
                    <span>🗡️</span> PiN-Blog
                </div>
            </header>

            {/* --- MAIN CONTENT --- */}
            {/* Thêm flex center để Form Login tự động căn giữa màn hình */}
            <main className="flex-1 flex items-center justify-center p-4">
                {children}
            </main>

            {/* --- FOOTER (Floating) --- */}
            <footer className="absolute bottom-0 w-full z-50 py-6 text-center">
                <p className="text-sm font-medium text-muted-foreground">
                    © {new Date().getFullYear()} PiN-Blog. All rights reserved.
                </p>
                <div className="flex justify-center gap-6 mt-2 text-xs text-muted-foreground/60">
                    <Link
                        href="#"
                        className="hover:text-accent transition-colors duration-300"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        href="#"
                        className="hover:text-accent transition-colors duration-300"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </footer>
        </div>
    );
}
