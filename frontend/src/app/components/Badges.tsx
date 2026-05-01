import React from "react";

interface BadgeProps {
    className?: string;
    children: React.ReactNode;
}

export function Badge({ className = "", children }: BadgeProps) {
    return (
        <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${className}`}
        >
            {children}
        </span>
    );
}