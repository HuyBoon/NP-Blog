import Footer from "@/components/frontend/Footer";
import Header from "@/components/frontend/Header";

export default function FrontendLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen  flex flex-col items-center justify-between pb-10">
            <Header />
            <main className="w-full max-w-5xl flex-1 flex flex-col items-center px-4 mt-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}
