"use client";

import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import DialogCreateUser from "./_components/dialog-create-user";

export default function SignUpPage() {
    const [open, setOpen] = useState(true);

    return (
        <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.14),_transparent_34%),linear-gradient(135deg,_#f8fafc_0%,_#eef5ee_100%)] px-4 py-8">
            <div className="w-full max-w-2xl rounded-[2rem] border border-white/60 bg-white/75 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:p-8">
                <div className="mb-6 space-y-2 text-center">
                    <p className="text-xs uppercase tracking-[0.35em] text-primary">Create account</p>
                    <h1 className="text-3xl font-semibold text-slate-900">Register a new user</h1>
                    <p className="text-sm text-slate-500">Isi data di bawah untuk membuat akun baru.</p>
                </div>

                <div className="flex justify-center">
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogCreateUser refetch={() => undefined} />
                    </Dialog>
                </div>
            </div>
        </main>
    );
}