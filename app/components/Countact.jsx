"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaSnapchat,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBook,
} from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("تم إرسال الرسالة بنجاح!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

   const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconHover = {
    hover: { scale: 1.1, rotate: 10 },
    tap: { scale: 0.9 },
  };

  return (
    <div className="bg_color p-4 md:p-14" id="contact">
      <ToastContainer />
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-lg w-full flex flex-col md:flex-row justify-between items-center"
        >
           <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center text-[#E7F3F2] text-3xl md:text-5xl font-bold"
            >
              تواصل معنا
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex justify-center gap-4 mt-4"
            >
              {[
                FaLinkedinIn,
                FaSnapchat,
                FaInstagram,
                FaFacebookF,
                FaTwitter,
              ].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover="hover"
                  whileTap="tap"
                  variants={iconHover}
                  className="p-3 text-white rounded-full hover:bg-[#104D84] hover:border-[#104D84] cursor-pointer transition border"
                >
                  <Icon className="text-xl" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* الجزء الأيمن: النموذج */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 grid gap-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#104D84]" />
                <input
                  type="text"
                  name="name"
                  placeholder="الاسم"
                  className="w-full p-3 px-10 bg-white/20 rounded-full text-white placeholder-white outline-none border border-[#104D84]"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <FaBook className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#104D84]" />
                <select
                  name="course"
                  className="w-full p-3 px-10 bg-white/20 rounded-full text-white placeholder-white outline-none border border-[#104D84]"
                  value={formData.course}
                  onChange={handleChange}
                >
                  <option value="" className="text-[#104D84]">
                    اختر الدورة
                  </option>
                  <option value="course1" className="text-[#104D84]">
                    دورة 1
                  </option>
                  <option value="course2" className="text-[#104D84]">
                    دورة 2
                  </option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#104D84]" />
                <input
                  type="text"
                  name="phone"
                  placeholder="رقم الجوال"
                  className="w-full p-3 px-10 bg-white/20 rounded-full text-white placeholder-white outline-none border border-[#104D84]"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#104D84]" />
                <input
                  type="email"
                  name="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full p-3 px-10 bg-white/20 rounded-full text-white placeholder-white outline-none border border-[#104D84]"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-4 p-2 bg-white text-blue-700 rounded-full text-lg font-semibold hover:bg-gray-200"
            >
              إرسال
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
}