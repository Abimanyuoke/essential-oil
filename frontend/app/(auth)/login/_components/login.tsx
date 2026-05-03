"use client"

import Image from "next/image";
import Link from "next/link";
import FormInput from "@/components/common/form-input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { INITAL_LOGIN_FORM, INITAL_STATE_LOGIN_FORM } from "@/constants/auth-constant";
import { LoginForm, loginSchemaForm } from "@/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { login } from "../actions";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import logo from "@/public/logo1.png";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    const form = useForm<LoginForm>({
        resolver: zodResolver(loginSchemaForm),
        defaultValues: INITAL_LOGIN_FORM,
    });

    const [loginState, loginAction, isPendingLogin] = useActionState(login, INITAL_STATE_LOGIN_FORM);

    const onSubmit = form.handleSubmit(async (data) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        });


        startTransition(() => {
            loginAction(formData);
        })
    });


    useEffect(() => {
        if (loginState.status === 'error' && loginState.errors) {
            toast.error('Login failed', {
                description: loginState.errors?._form?.[0],
            })
            return;
        }

        if (loginState.status === 'success') {
            toast.success('Login berhasil', {
                description: 'Selamat datang kembali. Anda akan diarahkan ke dashboard.',
            });
            form.reset();
            router.push('/');
        }
    }, [form, loginState, router]);

    return (
        <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.18),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(15,23,42,0.15),_transparent_28%),linear-gradient(135deg,_#f8fafc_0%,_#eef5ee_48%,_#ffffff_100%)] px-4 py-8 sm:px-6 lg:px-8">
            <div className="absolute left-0 top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

            <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center justify-center">
                <div className="grid w-full overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="relative flex flex-col justify-between gap-10 bg-[linear-gradient(160deg,_#0f172a_0%,_#1f2937_45%,_#0f172a_100%)] p-8 text-white sm:p-12 lg:p-14">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.14),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.18),_transparent_30%)]" />
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15">
                                <Image src={logo} alt="Essential Oil logo" className="h-12 w-auto sm:h-14" priority />
                            </div>
                            <div>
                                <p className="text-xs uppercase tracking-[0.35em] text-white/60">Essential Oil</p>
                                <h1 className="mt-1 text-2xl font-semibold sm:text-3xl">Natural calm, premium experience.</h1>
                            </div>
                        </div>

                        <div className="relative z-10 max-w-xl space-y-5">
                            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/80">Login portal</p>
                            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
                                Masuk dengan tampilan yang lebih elegan dan nyaman.
                            </h2>
                            <p className="max-w-lg text-base leading-7 text-white/75 sm:text-lg">
                                Panel kiri bisa dipakai untuk logo, tagline, dan deskripsi singkat. Bagian kanan difokuskan ke form login yang bersih, modern, dan mudah dibaca.
                            </p>
                        </div>

                        <div className="relative z-10 grid gap-3 text-sm text-white/75 sm:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <span className="block font-semibold text-white">Secure</span>
                                <span className="text-white/65">Protected auth flow</span>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <span className="block font-semibold text-white">Fast</span>
                                <span className="text-white/65">Simple login state</span>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <span className="block font-semibold text-white">Clean</span>
                                <span className="text-white/65">Minimal visual noise</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
                        <Card className="w-full max-w-md border-0 bg-white/90 shadow-none ring-1 ring-slate-200/80">
                            <CardHeader className="space-y-3 text-center">
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Image src={logo} alt="Essential Oil logo" className="h-8 w-auto" />
                                </div>
                                <CardTitle className="text-2xl font-semibold text-slate-900">Welcome back</CardTitle>
                                <CardDescription className="text-sm text-slate-500">
                                    Login untuk mengakses semua fitur admin dan dashboard.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <Form {...form}>
                                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                        <FormInput form={form} name="email" label="Email" placeholder="Insert your email" type="email" />
                                        <FormInput form={form} name="password" label="Password" placeholder="******" type="password" />
                                        <Button className="h-11 w-full rounded-xl bg-slate-900 text-white hover:bg-slate-800" type="submit" disabled={isPendingLogin}>
                                            {isPendingLogin ? <Loader2 className="h-4 w-4 animate-spin" /> : "Login"}
                                        </Button>
                                    </form>
                                </Form>

                                <div className="text-center text-sm text-slate-500">
                                    Belum punya akun? {" "}
                                    <Link href="/signUp" className="font-semibold text-primary underline-offset-4 hover:underline">
                                        Sign up di sini
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}