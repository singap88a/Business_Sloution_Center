"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Certificates_1 from '../../public/Certificates_1.png';
import Certificates_2 from '../../public/Certificates_2.png';
import Certificates_3 from '../../public/Certificates_3.png';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const cards = [
    {
        image: Certificates_1,
        title: 'جودة في التدريب',
        description: 'نهتم بالمحتوي التدريبي القائم علي الواقع المهني أكثر من النظري مما يساعد المتدرب علي اكتساب العديد من المهارات والخبرات'
    },
    {
        image: Certificates_2,
        title: 'شهادات معتمدة',
        description: 'جميع الدورات بشهادات معتمدة وعدد ساعات معتمدة من المؤسسة العامة للتدريب التقني والمهني'
    },
    {
        image: Certificates_3,
        title: 'متابعة مستمرة',
        description: 'نعمل دائما علي تحقيق المتدرب لأكبر قدر من الإستفادة المهنية والتدريبية من خلال المتابعة المستمرة'
    }
];

function Certificates() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="bg_color py-10">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-8 text-white">لماذا تختار حلول لأعمال التدريب</h1>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
          
                     breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Autoplay ]}
                    className="mySwiper"
                    loop={true} // تعطيل خاصية loop
                >
                    {cards.map((card, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                className="rounded-lg overflow-hidden w-full p-6 hover:bg-[#003666] transition-all"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeInUp}
 
                            >
                                <div className="h-24 w-24 flex justify-center items-center rounded-full bg-[#dbfffc7a] mx-auto">
                                    <Image src={card.image} alt={card.title} className="mx-auto" />
                                </div>

                                <h1 className="text-2xl md:text-3xl font-semibold mt-4 mb-2 text-center text-white">{card.title}</h1>
                                <p className="text-gray-300 text-center text-lg md:text-xl">{card.description}</p>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default Certificates;