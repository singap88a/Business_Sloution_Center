"use client";
import React, { useEffect, useState, useRef } from "react";
import banner_1 from "../../public/banner_1.png";
import banner_2 from "../../public/banner_2.png";
import banner_3 from "../../public/banner_3.png";
import banner_4 from "../../public/banner_4.png";
import banner_5 from "../../public/banner_5.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from 'react-i18next';

function Banner() {
  const { t } = useTranslation();
  
  const banners = [
    { icon: banner_1, number: 15, titleKey: "banner.certified_courses" },
    { icon: banner_2, number: 60, titleKey: "banner.training_days" },
    { icon: banner_3, number: 216, titleKey: "banner.certified_hours" },
    { icon: banner_4, number: 320, titleKey: "banner.completed_courses" },
    { icon: banner_5, number: 17000, titleKey: "banner.trainees" },
  ];

  const [counts, setCounts] = useState(banners.map(() => 0));
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top } = sectionRef.current.getBoundingClientRect();
        if (top < window.innerHeight && !hasStarted) {
          setHasStarted(true);
          startCounting();
        }
      }
    };

    const startCounting = () => {
      banners.forEach((banner, index) => {
        let count = 0;
        const interval = setInterval(() => {
          count += Math.ceil(banner.number / 50);
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts];
            newCounts[index] = count > banner.number ? banner.number : count;
            return newCounts;
          });
          if (count >= banner.number) clearInterval(interval);
        }, 50);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasStarted, banners]);

  return (
    <div className="bg_color py-5" ref={sectionRef}>
      <div className="container text-center">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
          loop={true}
        >
          {banners.map((banner, index) => (
            <SwiperSlide key={index}>
              <div
                className={`p-3 rounded text-center flex flex-col items-center ${
                  index !== banners.length - 5 ? "border-r border-gray-300" : ""
                }`}
              >
                <div className="h-24 w-24 flex items-center bg-[#dbfffc7a] rounded-full justify-center">
                  <Image src={banner.icon} alt={t(banner.titleKey)} />
                </div>
                <h3 className="mb-1 font-bold text-[34px] text-white">
                  +{counts[index]}
                </h3>
                <p className="text-muted text-white text-xl">
                  {t(banner.titleKey)}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;