"use client";

import { useRef, useState } from "react";
import { motion, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "a" | "button" | "div";
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  as: Tag = "div",
  href,
  onClick,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(0, { stiffness: 200, damping: 18 });
  const y = useSpring(0, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const props: Record<string, unknown> = {
    href,
    onClick,
    target,
    rel,
    className,
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-flex">
      <motion.div style={{ x, y }} className="inline-flex">
        <Tag {...props}>{children}</Tag>
      </motion.div>
    </div>
  );
}
