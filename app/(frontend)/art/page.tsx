// app/(frontend)/art/page.tsx
import Link from "next/link";

// Dữ liệu mẫu cho trang Art (Video Piano, Hình ảnh nghệ thuật...)
const artItems = [
    {
        id: 1,
        title: "Moonlight Sonata - Cover",
        type: "video",
        height: "h-[400px]",
    },
    { id: 2, title: "Abstract Emotion", type: "image", height: "h-[250px]" },
    {
        id: 3,
        title: "Chopin Nocturne Op.9 No.2",
        type: "video",
        height: "h-[350px]",
    },
    { id: 4, title: "City Lights Sketch", type: "image", height: "h-[450px]" },
    { id: 5, title: "Jazz Improvisation", type: "video", height: "h-[300px]" },
    {
        id: 6,
        title: "Watercolor Landscape",
        type: "image",
        height: "h-[350px]",
    },
];

export default function ArtPage() {
    return (
        <div className="w-full flex flex-col items-center gap-12 animate-fade-in">
            {/* Hero Section */}
            <section className="text-center space-y-6 max-w-2xl mt-8">
                <h1 className="text-5xl font-extrabold text-white">
                    My <span className="text-accent">Art</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    Nơi lưu giữ những khoảnh khắc thăng hoa cùng âm nhạc và nghệ
                    thuật.
                </p>
            </section>

            {/* Masonry Grid Layout */}
            {/* columns-1 cho mobile, columns-2 cho tablet, columns-3 cho desktop */}
            <section className="w-full columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-10">
                {artItems.map((item) => (
                    <div
                        key={item.id}
                        // break-inside-avoid giúp phần tử không bị cắt đôi giữa 2 cột
                        className={`relative group rounded-xl overflow-hidden border border-border bg-card break-inside-avoid cursor-pointer hover:border-accent transition-all duration-300 ${item.height}`}
                    >
                        {/* Background giả lập */}
                        <div className="absolute inset-0 bg-secondary group-hover:scale-105 transition-transform duration-500"></div>

                        {/* Lớp phủ gradient để text dễ đọc */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                        {/* Icon Play nếu là Video */}
                        {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-8 h-8 ml-1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                        )}

                        {/* Tiêu đề tác phẩm */}
                        <div className="absolute bottom-0 left-0 p-5 w-full">
                            <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider bg-black/50 text-accent rounded-md mb-2 inline-block backdrop-blur-md">
                                {item.type}
                            </span>
                            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
