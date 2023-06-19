'use client'

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-indigo-600",
        "text-white",
        "outline-transparent",
        "focus:hover:bg-indigo-600",
        "disabled:bg-indigo-300"
      ],
      secondary: [
        "bg-white",
        "text-zinc-800",
        "disabled:bg-white/40",
        "disabled:text-white",
        "disabled:outline-transparent",
        "outline",
        "outline-1",      
        "outline-zinc-300",
        "focus:hover:outline-zinc-400",
      ],
    },
    rounded: {
      small: ["rounded-sm"],
      medium: ["rounded-md"],
    },
    size: {
      small: ["text-sm", "py-0.5", "px-1.5"],
      medium: ["text-sm", "py-1.5", "px-4"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
    rounded: "medium"
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
    children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  children,
  ...props
}) => <button className={button({ intent, size, className })} {...props}>
  {children}
</button>;
