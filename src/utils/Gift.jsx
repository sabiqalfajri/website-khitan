import { IoMdCopy } from "react-icons/io";
import React, { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";
import { motion } from "framer-motion";

const Gift = () => {
    const [copy, setCopy] = useState({
        bri: false,
        bca: false,
      });
    const copyTo = (bank) => {
        const rekeningElement = document.getElementById(bank);
        const rekeningText = rekeningElement.innerText;
        navigator.clipboard.writeText(rekeningText).then(() => {
            setCopy((prev) => ({ ...prev, [bank]: true }));
            setTimeout(() => {
                setCopy((prev) => ({ ...prev, [bank]: false }));
            }, 1500);
        }).catch((error) => {
            setCopy('Gagal menyalin nomor rekening');
        })
    }
    return (
        <div className="flex flex-col justify-center items-center h-[55vh] pb-[3rem]">
            <div className="bg-[#CFA473] h-[40vh] w-[95%] flex flex-col justify-start items-center p-[0.8rem] relative">
                    <div className="flex flex-nowrap justify-center items-center gap-3 w-full mt-[2rem]">
                        <div className="bg-[#FFF] w-[25%] h-[0.1rem]"></div>
                        <h1 className="text-[#FFF] text-[0.8rem]">KIRIM HADIAH</h1>
                        <div className="bg-[#FFF] w-[25%] h-[0.1rem]"></div>
                    </div>
                    <p className="text-[0.7rem] text-center text-[#FFF] mt-[1rem]">Doa dan restu sudah lebih dari cukup. Tapi jika ingin berbagi rezeki sebagai tanda kasih, kami juga menyediakan informasi rekening di bawah ini</p>
                    <div className="bg-[#FFF] h-[30vh] w-[92%] flex absolute bottom-[-4rem] gap-2 px-2 overflow-hidden">
                        <motion.div className="flex flex-col justify-center items-center w-1/2 gap-[2rem]"
                        initial={{ x: -50, opacity: 0 }}
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
                            <img className="w-[60%] h-auto" src="/gambar/bsi.svg" alt="" />
                            <p className="text-[0.8rem] text-[#000]" id="bca">7137849571</p>
                            <button className="bg-[#A37446] w-[70%] text-[#FFF] text-[0.7rem] py-2 flex flex-wrap justify-center items-center gap-2 hover:brightness-90 transition duration-200 cursor-pointer" type="button" onClick={() => copyTo('bca')}>
                                {copy.bca ? <FaCheck /> : <FaCopy size={15} />}
                                {copy.bca ? 'Success' : 'Copy'}
                            </button>
                        </motion.div>
                        <motion.div className="flex flex-col justify-center items-center w-1/2 gap-[2rem]"
                        initial={{ x: 50, opacity: 0 }}
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
                            <img className="w-[43%] h-auto" src="/gambar/bri.svg" alt="" />
                            <p className="text-[0.8rem] text-[#000]" id="bri">007701034296505</p>
                            <button className="bg-[#A37446] w-[70%] text-[#FFF] text-[0.7rem] py-2 flex flex-wrap justify-center items-center gap-2 hover:brightness-90 transition duration-200 cursor-pointer" type="button" onClick={() => copyTo('bri')}>
                                {copy.bri ? <FaCheck /> : <FaCopy size={15} />}
                                {copy.bri ? 'Success' : 'Copy'}
                            </button>
                        </motion.div>
                    </div>
            </div>
        </div>
    )
}

export default Gift;