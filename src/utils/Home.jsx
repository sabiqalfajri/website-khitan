import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Location from "./Location";
import Gallery from "./Gallery";
import Confirm from "./Confirm";
import Gift from "./Gift";
import Closing from "./Closing";
import Footer from "./Footer";


const Home = () => {
  const { name } = useParams();
  const [scroll, setScroll] = useState(false);
  const contenRef = useRef(null);
  const weddingDate = new Date("2025-05-31T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = weddingDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const storedScrollState = localStorage.getItem("scroll");
    if (storedScrollState) {
      const parsedScrol = JSON.parse(storedScrollState);
      setScroll(parsedScrol);
    }
  }, []);

  useEffect(() => {
    localStorage.getItem("scroll", JSON.stringify(scroll));
    document.body.style.overflowY = scroll ? "auto" : "hidden";
  }, [scroll]);

  const [show, setShow] = useState(false);
  const audioRef = useRef(null);
  useEffect(() => {
    const audio = audioRef.current;
    const startSong = 25;

    const setStartTime = () => {
      audio.currentTime = startSong;
    };

    audio.addEventListener("loadedmetadata", setStartTime);
    return () => {
      audio.removeEventListener("loadedmetadata", setStartTime);
    };
  }, []);

  const handleShow = () => {
    setShow((prevShow) => {
      const newShow = !prevShow;
      if (newShow) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      return newShow;
    });
  };

  // untuk mengatur button lihat undangan
  const handleClick = () => {
    handleShow();
    setScroll(true);
    setTimeout(() => {
      if (contenRef.current) {
        window.scrollTo({
          top: contenRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    }, 0);
  };
  const ornamentImage = [
    {src: "/gambar/lamp-hiasan.webp", alt: "Lamp Hiasan 1", className: "w-[100px] absolute top-[10px] left-[10px]"},
    {src: "/gambar/lamp-hiasan.webp", alt: "Lamp Hiasan 2", className: "w-[130px] absolute top-[10px]"},
    {src: "/gambar/lamp-hiasan.webp", alt: "Lamp Hiasan 3", className: "w-[100px] absolute top-[10px] right-[10px]"},
  ]

  const timer = [
    {name: "Hari", value: timeLeft.days || "0"},
    {name: "Jam", value: timeLeft.hours || "0"},
    {name: "Menit", value: timeLeft.minutes || "0"},
    {name: "Detik", value: timeLeft.seconds || "0"},
  ]


    return (
        <>
            <div className="h-[100vh] w-full flex flex-col justify-center items-center text-center relative overflow-hidden bg-cover bg-center" style={{ 
                backgroundImage: 'url("/gambar/background-home.webp")',
            }}>
                {ornamentImage.map((img, index) => (
                    <motion.img key={index} className={img.className} src={img.src} alt={img.alt}
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                    delay: 0.4,
                    y: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                    }}
                    viewport={{ once: true }}
                    />
                ))}
                <img className="w-[8rem] top-[10px]" src="/gambar/fawaz-frame.png" alt="" />
                <img className="max-w-[500px] absolute bottom-[-7rem]" src="/gambar/awan.webp" alt="" />
                <h5
                    className="mb-2 text-[1rem]"
                >
                    Kepada Bapak/Ibu/Saudara/i,
                    <span
                    className="text-[#000]"
                    >
                    {" "}
                    {name}
                    </span>
                </h5>
                <motion.h1
                    className="text-7xl font-bold"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.6 },
                    ease: "easeIn",
                    duration: 1,
                    }}
                    viewport={{ once: true }}
                    style={{
                    fontFamily: "Dancing Script",
                    }}
                >
                    Khitan
                </motion.h1>
                <h3 className="mt-3">Salnaf Fawaz Alghazi</h3>
                <h5
                    className="mt-2"
                >
                    Acara kami akan dimulai dalam:
                </h5>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                    delay: 0.3,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.6 },
                    ease: "easeIn",
                    duration: 1,
                    }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-[0.5rem]"
                >
                    {timer.map((item, index) => (
                        <div key={index} className="me-4 text-center bg-[#A37446] rounded-full w-14 h-14 p-1 flex justify-center items-center flex-col text-[#FFF]">
                            <h3
                                style={{
                                fontSize: "1.1rem",
                                }}
                            >
                                {item.value}
                            </h3>
                            <p
                                style={{
                                fontSize: "0.8rem",
                                }}
                            >
                                {item.name}
                            </p>
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                    delay: 0.4,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 0.6 },
                    ease: "easeIn",
                    duration: 1,
                    }}
                    viewport={{ once: true }}
                >
                    <button className="bg-[#A37446] text-[#FFF] px-[0.8rem] py-[0.2rem] mt-[1rem] cursor-pointer hover:brightness-90 transition duration-200" onClick={handleClick}>Lihat undangan</button>
                </motion.div>
                <audio ref={audioRef} loop>
                    <source src="/gambar/maherzain.mp3" type="audio/mp3" />
                </audio>
            </div>

            {scroll && (
                <>
                    <div ref={contenRef} className="flex flex-col h-[100vh] w-full justify-center items-center relative overflow-hidden transition-transform duration-200 ease-out">
                        <motion.img 
                        src="/gambar/fawaz-frame-2.png" alt="" 
                        className="w-[13.5rem]" 
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                        delay: 0.8,
                        y: { type: "spring", stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: "easeIn",
                        duration: 1,
                        }}
                        viewport={{ once: true }}
                        />
                        <motion.img src="/gambar/awan.webp" className="max-w-[500px] absolute top-[-7.5rem]" alt="" />
                        <div className="w-100 mt-4 flex flex-col justify-center items-center text-center">
                            <h5 className="text-[0.8rem]">Assalamualaikum wr.wb</h5>
                            <p className="w-[80%] text-[0.7rem] text-[#000]">Dengan memohon rahmat dan ridho Allah SWT, kami berniat mengadakan acara khitanan untuk putra kami. Dan kami mengundang Anda untuk hadir dalam acara tasyakuran khitanan ini.</p>
                            <div className="flex gap-[0.5rem] w-full flex-wrap justify-center items-center mt-3"> 
                                <div className="w-[20%] h-[0.1rem] bg-[#FFF]"></div>
                                <h2 className="text-[1rem]">Salnaf Fawaz Alghazi</h2>
                                <div className="w-[20%] h-[0.1rem] bg-[#FFF]"></div>
                            </div>
                            <p className="w-[80%] text-[0.7rem] text-[#000]">Anak ketujuh(bungsu) dari Bapak Aminudin & Ibu Tati Suswanti</p>
                        </div>
                    </div> 
                    <Location show={show} handleShow={handleShow} />
                    <Gallery />
                    <Confirm />
                    <Gift />
                    <Closing />
                    <Footer />
                </> 
            )}
        </>
    )
}

export default Home;