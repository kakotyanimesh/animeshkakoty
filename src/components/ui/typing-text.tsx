"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, forwardRef } from "react";
import { cn } from "@/lib/cn";

interface TypingTextProps {
    text: string;
    className?: string;
    speed?: number;
    showCursor?: boolean;
    cursorClassName?: string;
    onComplete?: () => void;
}

export const TypingText = forwardRef<HTMLSpanElement, TypingTextProps>(
    (
        {
            text,
            className,
            speed = 80,
            showCursor = true,
            cursorClassName,
            onComplete,
        },
        ref
    ) => {
        const count = useMotionValue(0);
        const rounded = useTransform(count, (latest) => Math.round(latest));
        const displayText = useTransform(rounded, (latest) =>
            text.slice(0, latest)
        );

        useEffect(() => {
            const controls = animate(count, text.length, {
                type: "tween",
                duration: (text.length * speed) / 1000,
                ease: "linear",
                onComplete: () => onComplete?.(),
            });

            return controls.stop;
        }, [count, text.length, speed, onComplete]);

        return (
            <span ref={ref} className={cn("flex items-center", className)}>
                <motion.span>{displayText}</motion.span>
                {showCursor && (
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                        className={cn(
                            "w-1 h-[1.2em] bg-current ml-1 ",
                            cursorClassName
                        )}
                    />
                )}
            </span>
        );
    }
);

TypingText.displayName = "TypingText";
