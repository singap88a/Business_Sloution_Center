"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../../public/hero.png";
import hero_1 from "../../public/hero_1.png";
import hero_2 from "../../public/hero_2.png";
import hero_3 from "../../public/hero_3.png";
import hero_4 from "../../public/hero_4.png";
import hero_5 from "../../public/hero_5.png";
import hero_6 from "../../public/hero_6.png";

function Hero() {
  // تعريف الحركات
  const fadeInLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-[#D1F7FF] py-10 relative overflow-hidden" id="Home">
      {/* الصور الخلفية */}
      <div className="md:flex hidden">
        <motion.div
          className="absolute top-[5%] left-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <Image src={hero_1} alt="Hero 1" />
        </motion.div>
        <motion.div
          className="absolute bottom-[5%] left-[60%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <Image src={hero_1} alt="Hero 1" />
        </motion.div>
        <motion.div
          className="absolute top-[20px] left-[45%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <Image src={hero_2} alt="Hero 2" />
        </motion.div>
        <motion.div
          className="absolute top-[50px] right-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <Image src={hero_3} alt="Hero 3" />
        </motion.div>
        <motion.div
          className="absolute bottom-[10px] left-[30%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <Image src={hero_3} alt="Hero 3" />
        </motion.div>
        <motion.div
          className="absolute bottom-[50px] right-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <Image src={hero_4} alt="Hero 4" />
        </motion.div>
        <motion.div
          className="absolute bottom-[100px] left-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <Image src={hero_5} alt="Hero 5" />
        </motion.div>
        <motion.div
          className="absolute top-[50px] right-[30%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <Image src={hero_6} alt="Hero 6" />
        </motion.div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8">
          {/* النصوص */}
          <motion.div
            className="w-full md:w-1/2 p-5 text-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
          >
            <h1 className="text-3xl md:text-6xl font-bold">
              إختيارك <span className="text-[#0B96A6]">الذكي </span> <br />
              من أجل مستقبلك <span className="text-[#0B96A6]">المهني</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mt-3">
              كل الدورات التي تحتاجها لكي تبدأ مسارك المهني في منصة واحدة بين
              يديك كل الدورات التي تحتاجها لكي تبدأ مسارك المهني في منصة واحدة
              بين يديك كل الدورات التي تحتاجها لكي تبدأ مسارك المهني في منصة
              واحدة بين يديك
            </p>
            <Link
              href="/"
              className="inline-block bg_color text-white px-6 py-2 mt-4 rounded-full transition"
            >
              استكشف الدورات
            </Link>
          </motion.div>

          {/* الصورة أو المحتوى الجانبي */}
          <motion.div
            className="w-full md:w-1/2 text-center p-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
          >
            <div className="md:w-[550px] w-full md:h-[430px] h-full">
              <Image src={hero} alt="Hero" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;