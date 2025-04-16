"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Accredited_1 from "../../public/Accredited_1.png";
import Accredited_2 from "../../public/Accredited_2.png";
import Accredited_3 from "../../public/Accredited_3.png";
import Image from "next/image";
import { useTranslation } from 'react-i18next';

function Accredited() {
  const { t } = useTranslation();
  const imges = [Accredited_1, Accredited_2, Accredited_3];

  // تعريف الحركة
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="py-10 bg-[#f5fcff]">
      <div className="container">
        <h1 className="text-center font-bold text-3xl md:text-5xl pb-5 text-[#072037]">
          {t('accredited.title')}
        </h1>

        {/* Swiper للشاشات الصغيرة */}
        <div className="md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="mySwiper"
            loop={true}                     
          >
            {imges.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="p-4">
                  <Image
                    src={img}
                    alt={t('accredited.image_alt')}
                    className="hover:border border-[#3998f0] hover:bg-[#4990d239] transition-all rounded-lg w-full h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* العرض العادي للشاشات الكبيرة */}
        <motion.div
          className="hidden md:flex justify-between items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          {imges.map((img, index) => (
            <div key={index} className="w-1/3 p-4">
              <Image
                src={img}
                alt={t('accredited.image_alt')}
                className="hover:border border-[#3998f0] hover:bg-[#4990d239] transition-all rounded-lg w-full h-auto"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Accredited;