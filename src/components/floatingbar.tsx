"use client";
import { AnimatePresence, motion } from "motion/react";
import { Instagram } from "./icon/instagram";
import { Twitter } from "./icon/twitter";
import { GitHub } from "./icon/github";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/cn";

export const FlotingMenu = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <div className='flex flex-row gap-2'>
            {SVGICONArray.map((icon, key) => (
                <motion.div
                    onHoverStart={() => setHoveredIndex(key)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    key={key}
                    className={cn("rounded-full flex justify-center items-center gap-1 p-2 transition-colors duration-200 bg-foreground/10")}
                    layout
                    >
                    <a
                        href={icon.href}
                        target='_blank'
                        rel={"noreferrer"}
                        className='flex justify-center items-center gap-1 w-full h-full'>
                        <AnimatePresence mode="wait">
                            {hoveredIndex === key && (
                                <motion.p
                                    className="text-xs text-zink-600 font-uprightOne whitespace-nowrap"
                                    initial={{ opacity: 0, width: 0 }}
                                    animate={{ opacity: 1, width: "auto" }}
                                    exit={{ opacity: 0, width: 0 }}
                                    transition={{ 
                                        duration: 0.2,
                                        ease: "easeInOut"
                                    }}
                                    style={{ pointerEvents: "none" }}
                                    >
                                    {icon.hoveredText}
                                </motion.p>
                            )}
                        </AnimatePresence>
                        <div className='flex-shrink-0'>
                            {icon.component}
                        </div>
                    </a>
                </motion.div>
            ))}
        </div>
    );
};

const SVGICONArray: {
    name: string;
    component: ReactNode;
    href: string;
    hoveredText: string;
}[] = [
        {
            name: "instagram",
            hoveredText: "bruh… this app stole my whole day",
            component: <Instagram />,
            href: "https://www.instagram.com/_animeshkakoty/",
        },
        {
            name: "twitter",
            hoveredText: "i come here to rant, then disappear",
            component: <Twitter />,
            href: "https://x.com/_animeshkakoty",
        },
        {
            name: "github",
            hoveredText: "half-baked code dump… welcome 🤷‍♂️",
            component: <GitHub />,
            href: "https://github.com/kakotyanimesh",
        },
    ];
