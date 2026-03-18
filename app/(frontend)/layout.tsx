import Footer from "@/components/frontend/Footer";
import Header from "@/components/frontend/Header";
// Import Provider vào đây
import { LanguageProvider } from "@/components/frontend/LanguageProvider";

export default function FrontendLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        /* Bọc toàn bộ layout bằng LanguageProvider */
        <LanguageProvider>
            <div className="min-h-screen flex flex-col items-center justify-between pb-10">
                <Header />
                <main className="w-full max-w-7xl flex-1 flex flex-col items-center px-4 my-8">
                    {children}
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}
