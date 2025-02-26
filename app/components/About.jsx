"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import about from "../../public/about.png";

function About() {
  // تعريف الحركات
  const fadeIn = {
    hidden: { opacity: 0, x: 100 }, // للعناصر التي تظهر من اليسار
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -100 }, // للعناصر التي تظهر من اليمين
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#f5fcff]" id="About">
          <div className="container overflow-hidden">
      <div className="flex flex-col md:flex-row w-full py-5 md:py-10 gap-20">
        {/* الصورة تظهر من اليسار */}
        <motion.div
          className="w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Image src={about} alt="About Us" className="w-full h-auto px-10" />
        </motion.div>

        {/* النص يظهر من اليمين */}
        <motion.div
          className="w-full md:w-1/2 my-auto px-4 md:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <h1 className="text-2xl md:text-4xl font-bold">تعرف علينا</h1>
          <p className="py-4 md:py-7 text-[#787878] text-lg md:text-2xl">
            مركز حلول الأعمال للتدريب تأسست عام 2021 يعمل تحت إشراف المؤسسة العامة
            للتدريب التقني والمهني ومرخص من المركز الوطني للتعليم الالكتروني
            ومعتمد في المجال المالي والغداري والمجال الإجتماعي وتطوير الذات
          </p>
          <h2 className="font-bold text-xl md:text-3xl text-[#0F5FA6]">
            تدريب - تطوير - تميز
          </h2>
        </motion.div>
      </div>
    </div>
    </div>

  );
}

export default About;