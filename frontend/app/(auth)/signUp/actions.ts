"use server";

import { uploadFile } from "@/actions/storage-action";
import { createClient } from "@/lib/supabase/server";
import { AuthFormState } from "@/types/auth";
import { createUserSchema } from "@/validations/auth-validation";

export async function createUser(prevState: AuthFormState, formData: FormData): Promise<AuthFormState> {
    // 1. Validasi Input dengan Zod
    const validatedFields = createUserSchema.safeParse({
        password: formData.get("password"),
        email: formData.get("email"),
        name: formData.get("name"),
        role: "user", 
        avatar_url: formData.get("avatar_url")
    });

    if (!validatedFields.success) {
        return {
            status: "error",
            errors: {
                ...validatedFields.error.flatten().fieldErrors,
                _form: [],
            }
        };
    }

    let finalAvatarUrl = "";

    // 2. Handle Upload Avatar jika ada
    if (validatedFields.data.avatar_url instanceof File && validatedFields.data.avatar_url.size > 0) {
        const { errors, data } = await uploadFile('images', 'users', validatedFields.data.avatar_url);
        if (errors) {
            return {
                status: "error",
                errors: {
                    ...prevState.errors,
                    _form: [errors._form[0] || "Gagal mengunggah gambar"],
                }
            };
        }
        finalAvatarUrl = data.url;
    }

    // 3. Daftarkan ke Supabase Auth
    const supabase = await createClient();

    const { error } = await supabase.auth.signUp({
        email: validatedFields.data.email,
        password: validatedFields.data.password,
        options: {
            data: {
                name: validatedFields.data.name,
                role: "user", 
                avatar_url: finalAvatarUrl,
            }
        }
    });

    if (error) {
        return {
            status: "error",
            errors: {
                ...prevState.errors,
                _form: [error.message],
            },
        };
    }

    return {
        status: "success",
        errors: { _form: [] } // Kosongkan error jika berhasil
    };
}