"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  ariaLabel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  icon: Icon,
  iconPosition = "right",
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-sm md:text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "bg-[#FF9500] text-white hover:bg-[#E68500] shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-[#FF9500] font-bold",
    secondary:
      "bg-[#1D1D1F] text-white border-2 border-[#1D1D1F] hover:bg-black hover:border-black shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-[#1D1D1F] font-bold",
    ghost:
      "bg-transparent text-[#1D1D1F] border border-[#1D1D1F] hover:bg-[#F5F5F7] hover:border-[#1D1D1F] focus:border-[#1D1D1F] focus:ring-0 font-semibold",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === "left" && (
        <Icon className="w-4 h-4" aria-hidden="true" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="w-4 h-4" aria-hidden="true" />
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {content}
    </motion.button>
  );
}

