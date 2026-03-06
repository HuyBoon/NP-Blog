import NextAuth from "next-auth";
import { authConfig } from "./auth.config"; // File cấu hình NextAuth của bạn

const { auth } = NextAuth(authConfig);

export default auth((req) => {
    const { nextUrl } = req;

    // Kiểm tra xem user đã đăng nhập chưa (có session hay không)
    const isLoggedIn = !!req.auth;

    // Phân loại các nhóm route
    const isAdminRoute = nextUrl.pathname.startsWith("/admin");
    const isAuthRoute =
        nextUrl.pathname === "/login" ||
        nextUrl.pathname === "/register" ||
        nextUrl.pathname.startsWith("/auth");

    // 1. Nếu đang truy cập trang Auth (/login, /register)
    if (isAuthRoute) {
        if (isLoggedIn) {
            // Đã đăng nhập rồi thì không cho vào trang login nữa, đẩy thẳng vào admin
            return Response.redirect(new URL("/admin", nextUrl));
        }
        return; // Chưa đăng nhập thì cho phép vào trang login bình thường
    }

    // 2. Nếu đang truy cập khu vực Admin (/admin, /admin/...)
    if (isAdminRoute) {
        if (!isLoggedIn) {
            // Chưa đăng nhập mà dám vào admin -> Đuổi ra trang login
            return Response.redirect(new URL("/login", nextUrl));
        }

        // (Tùy chọn) Nếu bạn muốn check role kỹ hơn ở đây:
        // if (req.auth.user.role !== "admin") {
        //     return Response.redirect(new URL("/", nextUrl)); // Không phải admin thì đẩy về trang chủ
        // }

        return; // Đã đăng nhập hợp lệ -> Cho phép vào
    }

    // 3. Các trang Frontend còn lại (/, /portfolio, /art...) -> Cho phép truy cập tự do
    return;
});

// Cấu hình matcher để middleware bỏ qua các file tĩnh, ảnh, api... giúp web chạy nhanh hơn
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
