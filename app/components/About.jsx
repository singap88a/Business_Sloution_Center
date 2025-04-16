"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import about from "../../public/about.png";
import { useTranslation } from 'react-i18next';

function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // تعريف الحركات (بنفس قيم Hero)
  const fadeInLeft = {
    hidden: { opacity: 0, x: 100 }, // من اليمين لليسار
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -100 }, // من اليسار لليمين
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#f5fcff]" id="About">
      <div className="container overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          {/* النصوص - نفس منطق Hero */}
          <motion.div
            className="w-full md:w-1/2 p-5 text-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={isRTL ? fadeInLeft : fadeInRight}
          >
            <h1 className="text-2xl md:text-4xl font-bold">{t('about.title')}</h1>
            <p className="py-4 md:py-7 text-[#787878] text-lg md:text-2xl">
              {t('about.description')}
            </p>
            <h2 className="font-bold text-xl md:text-3xl text-[#0F5FA6]">
              {t('about.tagline')}
            </h2>
          </motion.div>

          {/* الصورة - نفس منطق Hero */}
          <motion.div
            className="w-full md:w-1/2 text-center p-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={isRTL ? fadeInRight : fadeInLeft}
          >
            <Image src={about} alt={t('about.image_alt')} className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;