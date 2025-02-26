"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; // ✅ استيراد Autoplay
import "swiper/css";
import "swiper/css/navigation";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRegClock,
  FaRegCalendarAlt,
} from "react-icons/fa";
import Training_courses_1 from "../../public/Training_courses_1.png";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "دورة إدارة الموارد البشرية",
    hours: "16 ساعة تدريبية",
    days: "4 أيام تدريبية",
    image: Training_courses_1,
  },
  {
    id: 2,
    title: "دورة إدارة الموارد البشرية",
    hours: "16 ساعة تدريبية",
    days: "4 أيام تدريبية",
    image: Training_courses_1,
  },
  {
    id: 3,
    title: "دورة إدارة الموارد البشرية",
    hours: "16 ساعة تدريبية",
    days: "4 أيام تدريبية",
    image: Training_courses_1,
  },
  {
    id: 4,
    title: "دورة إدارة الموارد البشرية",
    hours: "16 ساعة تدريبية",
    days: "4 أيام تدريبية",
    image: Training_courses_1,
  },
];

export default function Training_courses() {
  return (
    <section className="bg-[#f5fcff] py-10" id="Training_courses">
      <div className="container">
        {/* أزرار التنقل */}
        <div className="flex justify-between space-x-3 items-center pb-5 ">
          <h2 className="md:text-5xl text-3xl font-bold text-right text-[#072037]  px-4">
            الدورات التدريبية
          </h2>
          <div className="flex items-center gap-3">
            <button className="swiper-button-prev-custom p-3 hover:bg-[#0F5FA6] border border-[#0F5FA6] rounded-full transition-all text-[#0F5FA6] hover:text-[#fff]">
              <FaArrowRight />
            </button>
            <button className="swiper-button-next-custom p-3 hover:bg-[#0F5FA6] border border-[#0F5FA6] rounded-full transition-all text-[#0F5FA6] hover:text-[#fff]">
              <FaArrowLeft />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]} // ✅ إضافة Autoplay
          spaceBetween={20}
          slidesPerView={1}
          loop={true} // ✅ تفعيل التكرار اللانهائي
          autoplay={{ delay: 2000, disableOnInteraction: false }} // ✅ تحريك تلقائي كل 2 ثانية
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="pb-10"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="  rounded-xl  erflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="mx-auto "
                />
                <div className="p-4 text-right">
                  <div className="flex items-center justify-between space-x-1 text-gray-600 text-sm">
                    <div className="flex items-center gap-1">
                      <FaRegClock className="ml-1 text-[#2b6ca9] text-xl" />
                      <span className="text-xl">{course.hours}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRegCalendarAlt className="ml-1 text-[#2b6ca9] text-xl" />
                      <span className="text-xl">{course.days}</span>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold mt-2 text-[#0E6FA5] text-center">
                    {course.title}
                  </h3>
                  <button className="mt-4 w-full bg-[#0886f54a] py-2 rounded-full flex justify-center items-center gap-2">
                    <span className="text-[#072037] text-xl">سجل الآن</span>
                    <FaArrowLeft className="text-[#072037]" />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
