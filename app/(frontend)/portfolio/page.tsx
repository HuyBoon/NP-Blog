import Image from "next/image";
import Link from "next/link";

const experienceData = [
    {
        id: 1,
        slug: "mobifone",
        company: "MOBIFONE",
        role: "Operation Engineer",
        description:
            "Speed, Professionalism, Efficiency Innovation. Continuously innovating and creating a strong and complete digital ecosystem, elevating the lives of Vietnamese people.",
        image: "/experience/mobifone.png",
        imagePlaceholder: "MBF",
    },
    {
        id: 2,
        slug: "a-chau-aieet",
        company: "A CHAU (AIEET)",
        role: "Operation Technician",
        description:
            "Fast and Efficient. BTS installation and maintenance. Survey and technical services. Construction and repair of BTS base station infrastructure.",
        image: "/experience/achau.png",
        imagePlaceholder: "AIEET",
    },
    {
        id: 3,
        slug: "mobitech",
        company: "MOBITECH",
        role: "Systems Design Engineer",
        description:
            "Young, dynamic, creative, and efficient. A dynamic business operating in the fields of electronics, telecommunications, and information technology.",
        image: "/experience/mobitech.png",
        imagePlaceholder: "MBT",
    },
    {
        id: 4,
        slug: "vietjet-air",
        company: "VIETJET AIR",
        role: "Supply Engineer",
        description:
            "Fly Into Your Future With Vietjet. In a friendly, transparent, respectful working environment with colleagues and a team of experienced and thoughtful leaders.",
        image: "/experience/vietjet.png",
        imagePlaceholder: "VJA",
    },
    {
        id: 5,
        slug: "thinh-phong",
        company: "THINH PHONG",
        role: "Machanical Engineer",
        description:
            "Responsibility and honesty. Improving working conditions and environmental hygiene in industrial and urban areas, ensuring hygiene and health requirements for people.",
        image: "/experience/thinhphong.png",
        imagePlaceholder: "TP",
    },
    {
        id: 6,
        slug: "jetstar-airways",
        company: "JETSTAR AIRWAYS",
        role: "Intership Planning Engineer",
        description:
            "Jetstar make the world more accessible by delivering low fares, fun travel and great value.",
        image: "/experience/jetstar.png",
        imagePlaceholder: "JSA",
    },
];
const partners = ["MobiFone", "Vietjet Air", "FPT", "Viettel"];
export default function PortfolioPage() {
    return (
        <div className="w-full flex flex-col items-center animate-fade-in pb-20">
            <h1 className="text-5xl font-extrabold text-white">
                All Of <span className="text-accent">Work</span>
            </h1>
            {/* --- Hero Section --- */}
            <section className="text-center space-y-6 max-w-4xl mt-12 mb-8 px-4">
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-3xl mx-auto font-medium">
                    I have seven years' experience working in various
                    environments and have accumulated a wealth of knowledge and
                    soft skills. I am currently seeking stability, where I can
                    contribute my abilities to a suitable company and achieve
                    greater success.
                </p>
            </section>

            {/* --- Video / Quote Section --- */}
            <div className="w-full max-w-4xl px-4 mb-12">
                <div className="relative w-full aspect-21/9 md:aspect-3/1 bg-secondary rounded-lg overflow-hidden border border-border/50 flex items-center justify-center group cursor-pointer shadow-lg">
                    {/* Ảnh nền tĩnh (Thay bằng ảnh cái bàn phím/cafe như trong hình) */}
                    <Image
                        src="/experience/quote-bg.png"
                        alt="Quote Background"
                        fill
                        className="object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* Dòng Quote */}
                    <h3 className="relative z-10 text-center text-white font-medium text-sm md:text-lg max-w-2xl px-6 italic drop-shadow-md">
                        "I view everything in life as exciting experiences,
                        storing them in my mind, refining them into who I am,
                        and carrying them with me as I conquer new heights."
                    </h3>
                </div>
            </div>

            <section className="w-full border-y border-border py-8 overflow-hidden bg-secondary/30">
                <div className="flex justify-center gap-12 md:gap-24 flex-wrap px-4">
                    {partners.map((partner, idx) => (
                        <div
                            key={idx}
                            className="text-2xl font-bold text-muted-foreground hover:text-accent transition-colors cursor-default"
                        >
                            {partner}
                        </div>
                    ))}
                </div>
            </section>
            {/* --- Đường kẻ ngang chia cách kép (Gold Lines) --- */}
            <div className="w-full h-[1px] bg-accent/30 mb-1"></div>
            <div className="w-full h-[2px] bg-accent mb-12 shadow-[0_0_10px_rgba(208,169,51,0.5)]"></div>

            {/* --- Grid Danh sách Kinh nghiệm (2 cột) --- */}
            <section className="w-full max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {experienceData.map((item) => (
                    <Link
                        key={item.id}
                        href={`/portfolio/${item.slug}`}
                        className="group flex flex-col bg-transparent border border-border/60 hover:border-accent transition-all duration-300 hover:shadow-[0_0_15px_rgba(208,169,51,0.15)] cursor-pointer"
                    >
                        {/* Khu vực Hình ảnh */}
                        <div className="w-full aspect-[16/9] relative overflow-hidden bg-secondary border-b border-border/60">
                            {/* Chữ placeholder hiển thị khi ảnh lỗi hoặc chưa có ảnh */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-4xl font-black text-muted-foreground opacity-30 tracking-widest">
                                    {item.imagePlaceholder}
                                </span>
                            </div>

                            {/* Ảnh công ty/dự án */}
                            <Image
                                src={item.image}
                                alt={item.company}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 relative z-10"
                                // Thêm opacity-0 nếu chưa có ảnh thật để nó hiện cái placeholder bên trên
                            />
                        </div>

                        {/* Nội dung thông tin dự án */}
                        <div className="p-5 flex flex-col flex-1">
                            {/* Tên công ty (Màu trắng) */}
                            <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide group-hover:text-accent transition-colors">
                                {item.company}
                            </h3>

                            {/* Vị trí/Vai trò (Màu vàng theo mẫu) */}
                            <h4 className="text-sm font-semibold text-accent mt-1 mb-3">
                                {item.role}
                            </h4>

                            {/* Mô tả */}
                            <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                                {item.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </section>
        </div>
    );
}
