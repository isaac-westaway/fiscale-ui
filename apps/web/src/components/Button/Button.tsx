import { cn } from '@/lib/cn';
import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
    ["px-4", "py-2", "font-semibold", "rounded", "focus:outline-none"], // Base classes
    {
        variants: {
            intent: {
                primary: ["bg-white", "text-black", "hover:bg-gray-800"],
                secondary: ["bg-white", "text-black", "border", "border-black", "hover:bg-gray-200"],
            },
            size: {
                small: ["text-sm", "py-1", "px-2"],
                medium: ["text-base", "py-2", "px-4"],
                large: ["text-lg", "py-3", "px-6"],
            },
            disabled: {
                true: ["opacity-50", "cursor-not-allowed"],
                false: [],
            },
        },
        defaultVariants: {
            intent: "primary",
            size: "medium",
            disabled: false,
        },
    }
);

export type ButtonVariants = {} & VariantProps<typeof buttonVariants>

type ButtonProps = {
    className: string,
    variants: ButtonVariants
}

export const Mybutton = ({className, variants}: ButtonProps) => {
    return (
        <button className={cn(variants, className, "bg-white")}>
            Hello!
        </button>
    );
};