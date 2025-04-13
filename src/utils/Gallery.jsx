import React, { useState, useEffect } from "react";
import LightboxLogic from "./Lightbox";
import { motion } from "framer-motion";

const Gallery = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const images = [
        { src: "/gambar/gallery-1.webp", className: "w-[9rem] h-[9rem] object-cover absolute bottom-[1rem] z-10", initial: { x: 100, opacity: 0, scale: 0.2 }, whileInView: { x: 0, opacity: 1, scale: 1 }, transition: { delay: 0.6, x: { type: "spring", stiffness: 60 }, scale: { type: "spring", stiffness: 60 }, opacity: { duration: 0.5 }, ease: "easeIn", duration: 1 } },
        { src: "/gambar/gallery-2.webp", className: "w-[9.5rem] h-[10rem] object-cover", initial: { y: -100, opacity: 0, scale: 0.6 }, whileInView: { y: 0, opacity: 1, scale: 1 }, transition: { delay: 0.6, y: { type: "spring", stiffness: 60 }, scale: { type: "spring", stiffness: 60 }, opacity: { duration: 0.5 }, ease: "easeIn", duration: 1 } },
        { src: "/gambar/gallery-3.webp", className: "w-[9.5rem] h-[13rem] object-cover", initial: { y: -100, opacity: 0, scale: 0.6 }, whileInView: { y: 0, opacity: 1, scale: 1 }, transition: { delay: 0.6, y: { type: "spring", stiffness: 60 }, scale: { type: "spring", stiffness: 60 }, opacity: { duration: 0.5 }, ease: "easeIn", duration: 1 }  },
        // bawah
        { src: "/gambar/gallery-4.webp", className: "w-[10rem] h-[11rem] object-cover absolute left-0 top-[-1rem]", initial: { y: -100, opacity: 0, scale: 0.6 }, whileInView: { y: 0, opacity: 1, scale: 1 }, transition: { delay: 0.6, y: { type: "spring", stiffness: 60 }, scale: { type: "spring", stiffness: 60 }, opacity: { duration: 0.5 }, ease: "easeIn", duration: 1 }  },
        { src: "/gambar/gallery-5.webp", className: "w-[8.5rem] h-[9rem] object-cover absolute top-[15%] z-10", initial: { x: -100, opacity: 0, scale: 0.6 }, whileInView: { x: 0, opacity: 1, scale: 1 }, transition: { delay: 0.6, x: { type: "spring", stiffness: 60 }, scale: { type: "spring", stiffness: 60 }, opacity: { duration: 0.5 }, ease: "easeIn", duration: 1 }  },
        { src: "/gambar/gallery-6.webp", className: "w-[11rem] h-[8.5rem] object-cover absolute right-0 top-[14%]", initial: { y: -100, opacity: 0, scale: 0.6 }, whileInView: { y: 0, opacity: 1, scale: 1 }, transition: { delay: 0.6, y: { type: "spring", stiffness: 60 }, scale: { type: "spring", stiffness: 60 }, opacity: { duration: 0.5 }, ease: "easeIn", duration: 1 } },
      ];

    return (
        <div className="h-[60vh] md:h-[65vh] bg-[#CFA473] flex flex-col justify-start items-center text-[#FFF]">
            <div className="flex flex-wrap relative justify-center w-full gap-[2rem] mb-[0.3rem]">
                {images.slice(0, 3).map((image, index) => (
                    <motion.img key={index} src={image.src} className={image.className} 
                    onClick={() => {
                        setPhotoIndex(index);
                        setOpen(true);
                    }}
                    // initial={image.initial}
                    // whileInView={image.whileInView}
                    // transition={{
                    //     ...image.transition,
                    //     delay: index * 0.2 + 0.3
                    // }}
                    // viewport={{ once: true }}
                    />
                ))}
            </div>
            <div className="bg-[#A37446] w-[80%] h-[3rem] flex justify-center items-center">
                <p className="ms-[2rem] m-0 text-[0.9rem]">Gallery</p>
            </div>
            <div className="flex flex-wrap relative justify-center w-[90%] gap-[1rem] h-[12rem] overflow-hidden">
                {images.slice(3, 6).map((image, index) => (
                    <motion.img key={index} src={image.src} className={image.className}
                    onClick={() => {
                        setPhotoIndex(index + 3); 
                        setOpen(true);
                    }}
                    // initial={image.initial}
                    // whileInView={image.whileInView}
                    // transition={{
                    //     ...image.transition,
                    //     delay: index * 0.2 + 0.3
                    // }}
                    // viewport={{ once: true }}
                    />
                ))}
            </div>

            <LightboxLogic
                images={images}
                photoIndex={photoIndex}
                setPhotoIndex={setPhotoIndex}
                open={open}
                setOpen={setOpen}
            />
        </div>
    )
}

export default Gallery;