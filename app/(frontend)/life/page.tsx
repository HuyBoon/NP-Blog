import Link from "next/link";

const lifeVideos = [
    {
        id: 1,
        title: "Vlog: Một ngày làm Freelance Developer",
        category: "Work & Life",
        duration: "15:30",
        imagePlaceholder: "💻",
    },
    {
        id: 2,
        title: "Kỷ niệm chuyến đi lặn biển ngắm san hô",
        category: "Travel",
        duration: "20:05",
        imagePlaceholder: "🌊",
    },
    {
        id: 3,
        title: "Tự tay nấu Steak cuối tuần",
        category: "Cooking",
        duration: "08:45",
        imagePlaceholder: "🥩",
    },
    {
        id: 4,
        title: "Trải nghiệm bộ môn leo núi nhân tạo",
        category: "Sport",
        duration: "12:10",
        imagePlaceholder: "🧗‍♂️",
    },
    {
        id: 5,
        title: "Setup lại góc làm việc Minimalism",
        category: "Lifestyle",
        duration: "09:20",
        imagePlaceholder: "🪴",
    },
    {
        id: 6,
        title: "Đạp xe dạo quanh thành phố lúc 5h sáng",
        category: "Sport",
        duration: "10:24",
        imagePlaceholder: "🚴",
    },
];

export default function LifePage() {
    return (
        <div className="w-full flex flex-col items-center gap-12 animate-fade-in pb-10">
            {/* Hero Section */}
            <section className="text-center space-y-6 max-w-2xl mt-8">
                <h1 className="text-5xl font-extrabold text-white">
                    My <span className="text-accent">Life</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    Góc nhỏ lưu giữ những thước phim về cuộc sống, trải nghiệm
                    và những điều bình dị thường ngày.
                </p>
            </section>

            {/* Cụm Filter (Bộ lọc giả lập) */}
            <div className="flex flex-wrap justify-center gap-4">
                {[
                    "All",
                    "Work & Life",
                    "Travel",
                    "Sport",
                    "Lifestyle",
                    "Cooking",
                ].map((filter, index) => (
                    <button
                        key={index}
                        className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                            index === 0
                                ? "bg-accent text-black"
                                : "bg-secondary text-white hover:bg-accent/80 hover:text-black border border-border"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Video Grid */}
            <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
                {lifeVideos.map((video) => (
                    <div
                        key={video.id}
                        className="group flex flex-col gap-4 cursor-pointer"
                    >
                        {/* Thumbnail Box */}
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-border bg-card group-hover:border-accent group-hover:shadow-[0_0_15px_rgba(208,169,51,0.2)] transition-all duration-300">
                            {/* Background giả lập */}
                            <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                                <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-500">
                                    {video.imagePlaceholder}
                                </span>
                            </div>

                            {/* Lớp phủ đen khi hover */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                            {/* Nút Play trung tâm */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="w-14 h-14 rounded-full bg-accent text-black flex items-center justify-center pl-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Thời lượng video */}
                            <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 text-white text-xs font-bold rounded">
                                {video.duration}
                            </div>
                        </div>

                        {/* Thông tin video */}
                        <div className="space-y-1 px-1">
                            <span className="text-xs font-bold text-accent tracking-wider uppercase">
                                {video.category}
                            </span>
                            <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors line-clamp-2">
                                {video.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
