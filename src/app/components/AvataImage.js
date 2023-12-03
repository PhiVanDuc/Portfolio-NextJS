"use client"

import { useState } from "react"
import Image from "next/image"
import pathImage from '@/assets/Images/f8.jpg'
import '@/assets/SCSS/stylePortfolioPage.scss'

export default function AvataImage() {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <Image 
            className= {isHover ? "avata-hover" : "avata"}
            src={pathImage}
            alt="Image"
            priority={true}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        />
    );
}