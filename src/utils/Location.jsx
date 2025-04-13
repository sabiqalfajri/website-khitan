import { LuBellRing } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FiClock } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";
import { FaMicrophoneAlt, FaPauseCircle } from "react-icons/fa";


const Location = ({ show , handleShow }) => {
    return (
        <>
            <div
                className="min-h-[75vh] flex flex-col items-center relative pb-[2rem] bg-[#CFA473] w-full"
            >
                <div 
                className="flex bg-[#FFF] p-[0.6rem] w-[95%] absolute top-[-10%] justify-center items-center gap-4"
                >
                    <div className="w-[10%]">
                        <LuBellRing size={33} />
                    </div>
                    <div className="w-[40%] flex flex-col justify-center items-center gap-3">
                        <h4 className="text-[0.9rem]">KHITAN EVENT</h4>
                        <div className="bg-[#A37446] w-[70%] h-[0.1rem]"></div>
                    </div>
                    <div className="flex flex-col p-2 gap-2 w-[50%] bg-[#A37446] text-[#FFF]">
                        <div className="flex flex-wrap gap-2">
                            <SlCalender size={14} />
                            <p className="m-0 text-[0.7rem]">31 Mei 2025</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <FiClock size={15} />
                            <p className="m-0 text-[0.7rem]">08:00 AM - Selesai</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <MdLocationPin size={15} />
                            <p className="m-0 text-[0.7rem]">JL Penatusan 1 No 9</p>
                        </div>
                    </div>
                </div>
                <div className="w-[95%] mt-[5rem]">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.348891737262!2d109.2540531!3d-7.426587199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655e99e023afb1%3A0x58606b87c5866b75!2sJl.%20Penatusan%201%20No.9%2C%20Purwokerto%20Wetan%2C%20Kec.%20Purwokerto%20Tim.%2C%20Kabupaten%20Banyumas%2C%20Jawa%20Tengah%2053111!5e0!3m2!1sid!2sid!4v1744487535715!5m2!1sid!2sid"
                    width="100%"
                    height="250"
                    style={{
                        border: "5px solid #A37446",
                    }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="flex gap-[1rem] mt-[1.5rem] w-[95%]">
                    <div className="w-1/2">
                       <button className="bg-[#A37446] w-full text-[#FFF] text-[0.8rem] py-[0.4rem] rounded-[5px] hover:brightness-90 transition duration-200 cursor-pointer" 
                       onClick={() => window.open("https://maps.app.goo.gl/RPa3aRdNTEhwS3Tq7", "_blank")}>
                        Buka Maps
                       </button> 
                    </div>
                    <div className="w-1/2">
                        <button className="bg-[#A37446] w-full text-[#FFF] text-[0.8rem] py-[0.4rem] rounded-[5px] hover:brightness-90 transition duration-200 cursor-pointer">Tambah ke Kalender</button>
                    </div>
                </div>
                <div className="flex flex-col w-[95%] bg-[#A37446] mt-[1.5rem] p-[1rem]">
                    <div className="flex flex-nowrap justify-center items-center gap-3 w-full mt-[1.4rem]">
                        <div className="bg-[#FFF] w-[20%] h-[0.1rem]"></div>
                        <h1 className="text-[0.8rem] w-[60%] text-[#FFF] m-0 text-center">DOA UNTUK ANAK KAMI</h1>
                        <div className="bg-[#FFF] w-[20%] h-[0.1rem]"></div>
                    </div>
                    <p className="text-[#FFF] text-[0.7rem] mt-[1rem] text-center">"Sempurnakanlah ibadah anak kami setelah melaksanakan khitan ini. Jadikanlah dia anak yang selalu dalam lindungan-Mu, ya Allah, anak yang saleh, hafal Al-Qur’an, memahami agama, dan diberkahi kehidupannya di dunia maupun di akhirat. Aamiin."</p>
                </div>
            </div>

            <div className="w-[5rem] h-[5rem] text-[2rem] fixed bottom-[0.5rem] right-[0.3rem] cursor-pointer audio-icon-wrapper">
                <button onClick={handleShow} className="cursor-pointer">
                    {show ? <FaPauseCircle /> : <FaMicrophoneAlt size={30} />}
                </button>
            </div>
        </>
    )
}

export default Location;