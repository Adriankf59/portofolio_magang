import Link from "next/link";
import React from "react";
import {motion} from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className="flex items-center justify-center mt-2">
            <MotionLink href="/"
            className="w-16 h-16 bg-light text-light flex items-center justify-center rounded-full font-bold text-xl"
            whileHover={{ 
                scale: 1.1,
                backgroundColor: "#D17A3B",
            
            }}
            >ADR.</MotionLink>
        </div>
    ); 
}

export default Logo;