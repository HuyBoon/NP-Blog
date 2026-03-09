import Link from "next/link";
import { MapPinOff } from "lucide-react";

export default function NotFound() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 bg-background">
            <div className="text-accent mb-6 animate-bounce">
                <MapPinOff size={80} strokeWidth={1.5} />
            </div>

            <h1 className="text-8xl md:text-9xl font-extrabold text-white mb-2 tracking-tighter drop-shadow-lg">
                404
            </h1>

            <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 uppercase tracking-widest">
                Lạc đường rồi!
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-lg leading-relaxed">
                Trang bạn đang tìm kiếm có vẻ như không tồn tại, đã bị gỡ bỏ
                hoặc bạn gõ sai đường dẫn. Hãy theo chân mình về lại trang chủ
                nhé.
            </p>
            <Link
                href="/"
                className="px-8 py-3 border-2 border-accent text-accent rounded-full font-bold hover:bg-accent hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(208,169,51,0.4)]"
            >
                Về lại an toàn
            </Link>
        </div>
    );
}
