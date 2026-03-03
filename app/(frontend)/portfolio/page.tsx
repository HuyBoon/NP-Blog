import Image from "next/image";
import Link from "next/link";

const projectsData = [
    {
        id: 1,
        title: "Tân Kiến Trúc",
        role: "Frontend Developer",
        techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
        description:
            "Website giới thiệu và trưng bày các dự án cho công ty kiến trúc.",
        link: "#",
        imagePlaceholder: "TKT",
    },
    {
        id: 2,
        title: "Amazing Phu Quoc",
        role: "Fullstack Developer",
        techStack: ["React", "Node.js", "MongoDB"],
        description: "Nền tảng đặt tour du lịch và khách sạn tại Phú Quốc.",
        link: "#",
        imagePlaceholder: "APQ",
    },
    {
        id: 3,
        title: "Varia Hotel",
        role: "Fullstack Developer",
        techStack: ["Next.js", "NestJS", "TypeORM"],
        description: "Hệ thống quản lý và đặt phòng khách sạn toàn diện.",
        link: "#",
        imagePlaceholder: "VH",
    },
    {
        id: 4,
        title: "JobTrack",
        role: "Personal Project",
        techStack: ["Next.js", "Supabase", "Tailwind CSS"],
        description:
            "Công cụ quản lý và theo dõi quá trình ứng tuyển công việc.",
        link: "#",
        imagePlaceholder: "JT",
    },
];

const partners = ["MobiFone", "Vietjet Air", "FPT", "Viettel"];

export default function PortfolioPage() {
    return (
        <div className="w-full flex flex-col items-center gap-16 animate-fade-in">
            {/* Hero Section của Portfolio */}
            <section className="text-center space-y-6 max-w-2xl mt-8">
                <h1 className="text-5xl font-extrabold text-white">
                    All Of <span className="text-accent">Work</span>
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                    Hơn 2 năm kinh nghiệm chinh chiến với các dự án thực tế. Từ
                    việc xây dựng giao diện người dùng mượt mà đến kiến trúc hệ
                    thống backend ổn định.
                </p>
            </section>

            {/* Đối tác / Các công ty (Marquee text hoặc Grid logo) */}
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

            {/* Grid Danh sách dự án */}
            <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/20"
                    >
                        {/* Ảnh cover dự án (Tạm thời dùng div màu, sau này thay bằng <Image /> của Next.js) */}
                        <div className="w-full aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                            <span className="text-5xl font-black text-muted-foreground opacity-30 group-hover:scale-110 transition-transform duration-500">
                                {project.imagePlaceholder}
                            </span>
                        </div>

                        {/* Thông tin dự án */}
                        <div className="p-6 space-y-4 relative z-20 bg-card">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-sm font-medium text-accent">
                                        {project.role}
                                    </span>
                                </div>
                                <Link
                                    href={project.link}
                                    className="p-2 bg-secondary rounded-full text-white hover:bg-accent hover:text-black transition-colors"
                                >
                                    ↗
                                </Link>
                            </div>

                            <p className="text-muted-foreground line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {project.techStack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs font-semibold bg-background border border-border rounded-full text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
