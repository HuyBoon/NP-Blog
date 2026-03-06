"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { register } from "@/actions/auth-actions";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
    const router = useRouter();
    const [state, formAction, isPending] = useActionState(register, undefined);

    useEffect(() => {
        if (state?.success) {
            toast.success(state.message);
            router.push("/login");
        }
    }, [state, router]);

    return (
        /* Sử dụng max-w-5xl và bo góc giống LoginPage */
        <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-card rounded-2xl overflow-hidden border border-border shadow-2xl shadow-accent/5">
            {/* --- CỘT TRÁI: FORM ĐĂNG KÝ --- */}
            <div className="flex items-center justify-center p-8 md:p-12 bg-background">
                <div className="mx-auto w-full max-w-sm space-y-6">
                    {/* Header */}
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-white">
                            Tạo tài khoản
                        </h1>
                        <p className="text-sm text-muted-foreground">
                            Tham gia cùng PiN-Blog ngay hôm nay
                        </p>
                    </div>

                    <form action={formAction} className="space-y-4 mt-4">
                        <div className="space-y-2">
                            <Label
                                htmlFor="name"
                                className="text-muted-foreground font-medium"
                            >
                                Họ và tên
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Tên của bạn..."
                                required
                                disabled={isPending}
                                className="h-11 bg-secondary/30 border-border focus-visible:ring-accent text-white"
                                defaultValue={state?.inputs?.name}
                            />
                            {state?.error?.name && (
                                <p className="text-xs text-destructive font-medium mt-1">
                                    {state.error.name[0]}
                                </p>
                            )}
                        </div>

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
                                className="h-11 bg-secondary/30 border-border focus-visible:ring-accent text-white"
                                defaultValue={state?.inputs?.email}
                            />
                            {state?.error?.email && (
                                <p className="text-xs text-destructive font-medium mt-1">
                                    {state.error.email[0]}
                                </p>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label
                                    htmlFor="password"
                                    className="text-muted-foreground font-medium"
                                >
                                    Mật khẩu
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    disabled={isPending}
                                    className="h-11 bg-secondary/30 border-border focus-visible:ring-accent text-white"
                                />
                                {state?.error?.password && (
                                    <p className="text-xs text-destructive font-medium mt-1">
                                        {state.error.password[0]}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Label
                                    htmlFor="confirmPassword"
                                    className="text-muted-foreground font-medium"
                                >
                                    Nhập lại
                                </Label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    required
                                    disabled={isPending}
                                    className="h-11 bg-secondary/30 border-border focus-visible:ring-accent text-white"
                                />
                                {state?.error?.confirmPassword && (
                                    <p className="text-xs text-destructive font-medium mt-1">
                                        {state.error.confirmPassword[0]}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Thông báo lỗi tổng (nếu có) */}
                        {state?.message && !state?.success && (
                            <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 text-destructive text-sm font-medium animate-in fade-in-50">
                                {state.message}
                            </div>
                        )}

                        <SubmitButton className="w-full h-11 text-base font-bold bg-accent text-accent-foreground hover:bg-accent/80 transition-colors mt-4">
                            Đăng ký tài khoản
                        </SubmitButton>
                    </form>

                    <div className="text-center text-sm text-muted-foreground pt-2">
                        Đã có tài khoản?{" "}
                        <Link
                            href="/login"
                            className="text-accent hover:text-white font-bold transition-colors"
                        >
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>

            {/* --- CỘT PHẢI: HÌNH ẢNH --- */}
            <div className="hidden lg:block relative h-full w-full bg-secondary">
                {/* Bạn nhớ chuẩn bị một bức ảnh register-bg.jpg nhé */}
                <Image
                    src="/logo.png"
                    alt="PiN-Blog Register background"
                    fill
                    className="object-cover opacity-60 mix-blend-overlay transition-all duration-700 hover:scale-105 hover:opacity-100"
                    priority
                />

                <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent z-10" />

                <div className="absolute bottom-10 right-10 z-20 text-white text-right space-y-3">
                    <h2 className="text-4xl font-extrabold">
                        Bắt đầu hành trình.
                    </h2>
                    <p className="text-lg font-medium text-muted-foreground">
                        Sáng tạo và xây dựng những điều tuyệt vời.
                    </p>
                </div>
            </div>
        </div>
    );
}
