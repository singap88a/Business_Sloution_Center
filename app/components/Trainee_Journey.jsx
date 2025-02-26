"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Trainee_Journey_1 from "../../public/Trainee_Journey_1.png";
import Image from "next/image";

const steps = [
  {
    title: "التعرف على الحاجات التدريبية",
    description:
      "يقوم المتدرب بتحديد البرنامج التدريبي أو طلب المساعدة لتقديم استشارة تدريبية مجانا",
    active: false,
  },
  {
    title: "التسجيل والاشتراك",
    description: "يتم التسجيل والإشتراك من خلال فريق المبيعات",
    active: false,
  },
  {
    title: "الخطة والمتابعة",
    description:
      "يقوم المتدرب بحضور الأيام التدريبية ويمكنه المشاركة والتفاعل وطلب الاستشارة من المدرب",
    active: true,
  },
  {
    title: "إصدار الشهادات والتقييم",
    description:
      "يتم اصدار الشهادة بعد 48 ساعة من نهاية البرنامج التدريبي ويتك استلامها من خلال منصة منار",
    active: false,
  },
];

const Trainee_Journey = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // تعريف الحركات
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg_color py-20 relative">
      {/* الصورة الخلفية */}
      <div className="absolute top-24 left-0 md:flex hidden opacity-50 hover:opacity-100 transition duration-300">
        <Image src={Trainee_Journey_1} alt="Trainee Journey" />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="flex flex-col items-center container">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-3xl md:text-5xl text-white font-bold mb-10"
        >
          رحلة المتدرب
        </motion.h2>

        <div className="relative w-full flex flex-col">
          {/* الخط العمودي */}
          <div className="absolute left-1/2 md:left-3/4 transform -translate-x-1/2 h-full w-[2px] bg-[#C1C1C1] md:flex hidden"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col md:flex-row items-center my-6 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: index * 0.2 }}
            >
              {/* النقطة */}
              <div
                className={`w-4 h-4 rounded-full absolute left-1/2 md:left-3/4 transform -translate-x-1/2 transition-all md:flex hidden ${
                  hoveredIndex === index ? "bg-[#2FF8FF] scale-125" : "bg-[#C1C1C1]"
                }`}
              ></div>

              {/* النص */}
              <div className="w-full flex flex-col md:flex-row md:text-start text-center">
                <div
                  className={`w-full md:w-1/3 transition-all ${
                    index % 2 === 0 ? "order-1" : "order-2"
                  }`}
                >
                  <h3 className="text-xl md:text-2xl font-bold cursor-pointer group-hover:text-[#2FF8FF] text-[#C1C1C1]">
                    {step.title}
                  </h3>
                </div>

                <div
                  className={`w-full md:w-2/3 md:absolute md:right-[30%]   text-lg md:text-2xl text-[#C1C1C1] transition-all   group-hover:text-white  md:p-0 p-5 ${
                    index % 1 === 0 ? "order-2" : "order-1"
                  }`}
                >
                  {step.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainee_Journey;