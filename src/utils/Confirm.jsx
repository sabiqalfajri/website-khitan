import React, { useState } from "react";
import { motion } from "framer-motion";

const Confirm = () => {
    const [nama, setNama] = useState("");
    const [jumlah, setJumlah] = useState("");
    const [harapan, setHarapan] = useState("");
    const [confirmation, setConfirmation] = useState("");
    
    // prosses whatsapp
    const handleLink = (e) => {
        e.preventDefault();
        let message = `Halo, Saya ${nama}.\n`;

        if (confirmation === "Maaf, saya berhalangan hadir") {
        message +=
            `Dengan berat hati saya tidak dapat menghadiri acara khitan.\n`;
        message += `Saya ingin mengucapkan ${harapan}. Terima kasih atas undanganya`
        } else if (confirmation === "Masih belum bisa memastikan" ) {
        message += `masih belum bisa memastikan kehadiran saya di acara khitan ini.\n`;
        message += `Saya ingin mengucapkan ${harapan}. Terima kasih atas undanganya`
        } else {
            message += `Ingin konfirmasi kehadiran bahwa saya akan datang ke acara khitan bersama ${jumlah} orang. Terimakasih`
        }
        const encode = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/628122727053?text=${encode}`;

        window.open(whatsappUrl, "_blank");
    };

    const ornamentImage = [
        {src: "/gambar/lamp-hiasan.webp", alt: "Lamp Hiasan 1", className: "w-[100px] absolute top-[35px] left-[10px]"},
        {src: "/gambar/lamp-hiasan.webp", alt: "Lamp Hiasan 1", className: "w-[100px] absolute top-[5px] left-[75px]"},
        {src: "/gambar/lamp-hiasan.webp", alt: "Lamp Hiasan 3", className: "w-[130px] absolute top-[10px]"},
        {src: "/gambar/lamp-hiasan.webp", alt: "Lamp Hiasan 4", className: "w-[100px] absolute top-[5px] right-[75px]"},
        {src: "/gambar/lamp-hiasan.webp", alt: "Lamp Hiasan 5", className: "w-[100px] absolute top-[35px] right-[10px]"},
      ]

    return (
        <div className="min-h-[90vh] w-full relative flex flex-col justify-center items-center">
            {ornamentImage.map((img, index) => (
                <motion.img key={index} className={img.className} src={img.src} alt={img.alt} 
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                delay: 0.4,
                y: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1,
                }}
                viewport={{ once: true }}
                />
            ))}
            <h1 className="text-[0.7rem] text-[#000] text-center w-[90%] mt-[10rem]">Kehadiran Anda akan menjadi kesan mendalam yang terukir di hati kami, disertai doa tulus dan rasa terima kasih. Jika Anda berkenan hadir untuk memberikan doa restu kepada putra kami.</h1>
            <div className="bg-[#CFA473] pt-[2rem] pb-[0.5rem] flex flex-col justify-center items-center w-[95%] mt-[2rem]">
                    <div className="flex flex-nowrap justify-center items-center gap-3 w-full mt-[1.4rem]">
                        <div className="bg-[#FFF] w-[25%] h-[0.1rem]"></div>
                        <h1 className="text-[#FFF] text-[0.8rem]">KONFIRMASI HADIR</h1>
                        <div className="bg-[#FFF] w-[25%] h-[0.1rem]"></div>
                    </div>
                <div className="mt-[2rem] p-[1rem] w-full">
                    <form action="" onSubmit={handleLink}>
                        <div className="flex gap-2 mb-3">
                            <div className="w-1/2">
                               <label className="block text-white mb-2 text-[0.8rem]" for="name">Nama</label>
                                <input className="w-full p-2 text-[#000] bg-[#F1E8D7] border border-gray-300 text-[0.7rem] h-[2rem] focus:outline-none focus:ring-2 focus:ring-[#A37446] transition duration-200" type="text" id="name" 
                                value={nama} 
                                onChange={(e) => setNama(e.target.value)} 
                                required
                                placeholder="Masukkan nama" /> 
                            </div>
                            <div className="w-1/2">
                               <label className="block text-white mb-2 text-[0.8rem]" for="name">Berapa orang?</label>
                                <select className="w-full p-2 bg-[#F1E8D7] border border-gray-300 text-[0.7rem] h-[2rem] focus:outline-none focus:ring-2 focus:ring-[#A37446] transition duration-200" id="guests"
                                value={jumlah}
                                required
                                onChange={(e) => setJumlah(e.target.value)}
                                >
                                    <option value="1">Satu</option>
                                    <option value="2">Dua</option>
                                    <option value="3">Tiga</option>
                                    <option value="4">Empat</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2 text-[0.8rem]" for="name">Apakah anda akan hadir?</label>
                            <select className="w-full p-2 border border-gray-300 bg-[#F1E8D7] text-[0.7rem] h-[2rem] focus:outline-none focus:ring-2 focus:ring-[#A37446] transition duration-200" id="attendance"
                            value={confirmation}
                            onChange={(e) => setConfirmation(e.target.value)}
                            required
                            >
                                <option value="Insya Allah saya hadir">Insya Allah saya hadir</option>
                                <option value="Masih belum bisa memastikan">Masih belum bisa memastikan</option>
                                <option value="Maaf, saya berhalangan hadir">Maaf, saya berhalangan hadir</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2 text-[0.8rem]" for="wishes">Harapan Kamu</label>
                            <textarea className="w-full p-2 border border-gray-300 bg-[#F1E8D7] text-[0.7rem] focus:outline-none focus:ring-2 focus:ring-[#A37446] transition duration-200" id="wishes" rows="4" placeholder="Harapan untuk anak kami"
                            value={harapan}
                            onChange={(e) => setHarapan(e.target.value)}
                            required
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-[#A37446] text-[#FFF] w-full py-[0.5rem] text-[0.7rem] hover:brightness-90 transition duration-200 cursor-pointer">Kirim via whatsapp</button>
                    </form>  
                </div>
            </div>
        </div>
    )
}

export default Confirm;