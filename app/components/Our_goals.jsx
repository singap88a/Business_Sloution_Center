"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import goals from "../../public/goals.png";
import { useTranslation } from 'react-i18next';

const OurGoals = () => {
  const { t } = useTranslation();

  // تعريف الحركات
  const fadeInLeft = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#f5fcff]" id="OurGoals">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* النصوص والأهداف */}
          <motion.div
            className="w-full md:w-1/2 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={fadeInLeft}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {t('goals.title')}
            </h2>
            <ul className="space-y-3 text-start">
              {[
                t('goals.goal1'),
                t('goals.goal2'),
                t('goals.goal3'),
                t('goals.goal4'),
                t('goals.goal5')
              ].map((goal, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <span className="bg-slate-600 w-5 h-5 rounded-[2] ml-5 relative z-[11]">
                    <span className="bg-blue-600 w-5 h-5 rounded-[2] ml-3 absolute bottom-1 right-1"></span>
                  </span>
                  <p className="text-gray-700 text-2xl">{goal}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            variants={fadeInRight}
          >
            <Image
              src={goals}
              alt={t('goals.image_alt')}
              width={400}
              height={300}
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default OurGoals;