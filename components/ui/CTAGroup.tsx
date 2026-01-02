"use client";

import Button from "./Button";
import { LucideIcon } from "lucide-react";

interface CTAGroupProps {
  primary: {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: LucideIcon;
  };
  secondary: {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: LucideIcon;
  };
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export default function CTAGroup({
  primary,
  secondary,
  className = "",
  orientation = "horizontal",
}: CTAGroupProps) {
  return (
    <div
      className={`flex ${
        orientation === "horizontal"
          ? "flex-col sm:flex-row gap-3 sm:gap-4"
          : "flex-col gap-3"
      } ${className}`}
    >
      <Button
        href={primary.href}
        onClick={primary.onClick}
        variant="primary"
        icon={primary.icon}
        iconPosition="right"
        className="w-full sm:w-auto"
      >
        {primary.label}
      </Button>
      <Button
        href={secondary.href}
        onClick={secondary.onClick}
        variant="secondary"
        icon={secondary.icon}
        iconPosition="right"
        className="w-full sm:w-auto"
      >
        {secondary.label}
      </Button>
    </div>
  );
}

