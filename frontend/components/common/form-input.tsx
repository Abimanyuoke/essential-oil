"use client"

import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react";

export default function FormInput<T extends FieldValues>(
    { form, name, label, placeholder, type = "text" }: {
        form: UseFormReturn<T>;
        name: Path<T>;
        label: string;
        placeholder: string;
        type?: string
    }) {

    const [showPassword, setShowPassword] = useState(false)
    const isPassword = type === "password";

    return (
        <FormField control={form.control} name={name} render={({ field: { ...rest } }) => (
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    {type === "textarea" ? (<Textarea placeholder={placeholder} {...rest} className="resize-none" />) : (
                        <div className="relative">
                            <Input
                                {...rest}
                                type={
                                    isPassword
                                        ? showPassword
                                            ? "text"
                                            : "password"
                                        : type }
                                placeholder={placeholder}
                                autoComplete="off"
                                className={isPassword ? "pr-10" : ""}/>

                            {isPassword && (
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((v) => !v)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>
                            )}
                        </div>
                    )}
                    {/* {type === "textarea" ? (<Textarea placeholder={placeholder} {...rest} className="resize-none" />) : (<Input type={type} placeholder={placeholder} autoComplete="off" {...rest} />)} */}
                </FormControl>
                <FormMessage className="text-xs" />
            </FormItem>
        )} />
    )
}