"use client";

import { useActionState } from "react";
import Link from "next/link";
import Image from "next/image";
import { authenticate } from "@/actions/auth-actions";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/ui/SubmitButton";

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(
        authenticate,
        undefined,
    );

    return (
        <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-card rounded-2xl overflow-hidden border border-border shadow-2xl shadow-accent/5">
            <div className="hidden lg:block relative h-full w-full bg-secondary">
                {/* Nhớ đổi src ảnh thành một bức ảnh nghệ thuật hoặc ảnh bạn chơi piano nhé */}
                <Image
                    src="/logo.png"
                    alt="PiN-Blog Login background"
                    fill
                    className="object-cover opacity-60 mix-blend-overlay transition-all duration-700 hover:scale-105 hover:opacity-100"
                    priority
                />

                {/* Lớp phủ Gradient để text góc dưới dễ đọc */}
                <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent z-10" />

                <div className="absolute bottom-10 left-10 z-20 text-white space-y-3">
                    <h2 className="text-4xl font-extrabold flex items-center gap-3">
                        <span className="text-accent">🗡️</span> PiN-Blog
                    </h2>
                    <p className="text-lg font-medium text-muted-foreground">
                        Nơi lưu giữ nghệ thuật và những trải nghiệm.
                    </p>
                </div>
            </div>
            {/* --- CỘT PHẢI: FORM LOGIN --- */}
            <div className="flex items-center justify-center p-8 md:p-12 bg-background">
                <div className="mx-auto w-full max-w-sm space-y-8">
                    {/* Header Form */}
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            Đăng nhập
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Nhập thông tin quản trị viên để tiếp tục
                        </p>
                    </div>

                    {/* Form */}
                    <form action={formAction} className="space-y-5">
                        <div className="space-y-2">
                            <Label
                                htmlFor="email"
                                className="text-muted-foreground font-medium"
                            >
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="admin@pinblog.com"
                                required
                                disabled={isPending}
                                /* Đổi style input: nền tối hơn, khi focus viền sẽ sáng màu vàng (ring-accent) */
                                className="h-12 bg-secondary/30 border-border focus-visible:ring-accent text-white"
                                defaultValue={state?.inputs?.email}
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label
                                    htmlFor="password"
                                    className="text-muted-foreground font-medium"
                                >
                                    Mật khẩu
                                </Label>
                                <Link
                                    href="#"
                                    className="text-xs font-semibold text-accent hover:text-white transition-colors"
                                >
                                    Quên mật khẩu?
                                </Link>
                            </div>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                required
                                disabled={isPending}
                                className="h-12 bg-secondary/30 border-border focus-visible:ring-accent text-white"
                            />
                        </div>

                        {/* Hiển thị lỗi từ state.message (Nền đỏ, viền đỏ mờ) */}
                        {state?.message && (
                            <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium animate-in fade-in-50">
                                {state.message}
                            </div>
                        )}

                        {/* Nút Submit (Màu vàng chữ đen để nổi bật nhất) */}
                        <SubmitButton className="w-full h-12 text-base font-bold bg-accent text-accent-foreground hover:bg-accent/80 transition-colors mt-2">
                            Vào hệ thống
                        </SubmitButton>
                    </form>

                    {/* Link Đăng ký */}
                    <div className="text-center text-sm text-muted-foreground">
                        Chưa có tài khoản?{" "}
                        <Link
                            href="/register"
                            className="text-accent hover:text-white font-bold transition-colors"
                        >
                            Đăng ký ngay
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
