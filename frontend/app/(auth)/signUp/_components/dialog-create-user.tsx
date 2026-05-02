/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { INITAL_CREATE_USER_FORM, INITAL_STATE_CREATE_USER } from "@/constants/auth-constant";
import { CreateUserForm, createUserSchema } from "@/validations/auth-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createUser } from "../actions";
import { Preview } from "@/types/general";
import FormUser from "./form-user";

export default function DialogCreateUser({ refetch }: { refetch: () => void }) {

    const form = useForm<CreateUserForm>({
        resolver: zodResolver(createUserSchema),
        defaultValues: INITAL_CREATE_USER_FORM,
    });

    const [createUserState, createUserAction, isPendingCreateUser] = useActionState(createUser, INITAL_STATE_CREATE_USER);

    const [preview, setPreview] = useState<Preview | undefined>(undefined);

    const onSubmit = form.handleSubmit(async (data) => {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, key === 'avatar_url' && preview ? preview.file : value as string);
        });

        startTransition(() => {
            createUserAction(formData);
        })
    });

    useEffect(() => {
        if (createUserState.status === 'error' && createUserState.errors) {
            toast.error('Create User Failed', {
                description: createUserState.errors?._form?.[0],
            })
        }
        if (createUserState?.status === 'success') {
            toast.success('User Created Successfully');
            form.reset();
            setPreview(undefined);
            document.querySelector<HTMLButtonElement>('[data-state="open"]')?.click();
            refetch();
        }
    }, [createUserState]);

    console.log('createUserState', createUserState);

    return (
        <FormUser form={form} onSubmit={onSubmit} isLoading={isPendingCreateUser} type="Create" preview={preview} setPreview={setPreview} />
    )
}