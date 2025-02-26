"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../public/logo.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "الرئيسية", href: "#Home" },
    { name: "تعرف علينا", href: "#About" },
    { name: "أهدافنا", href: "#OurGoals" },
    { name: "الدورات التدربية", href: "#Training_courses" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href) => {
    // إغلاق القائمة المنزلقة
    setIsMenuOpen(false);

    // الانتقال إلى القسم المحدد
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#D1F7FF]">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          <div className="text-xl font-bold">
            <Image src={logo} alt="Logo" width={100} height={50} />
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#0F5FA6] focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-10">
              {links.map((link, id) => (
                <li key={id}>
                  <a
                    href={link.href}
                    className="text-[#1D1D1D] hover:text-[#0F5FA6] font-bold text-xl transition-all"
                    onClick={(e) => {
                      e.preventDefault(); // منع السلوك الافتراضي
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden md:flex">
            <button
              type="submit"
              className="rounded-full px-6 py-2 border border-[#0F5FA6] text-[#0F5FA6] hover:text-white hover:bg-[#0F5FA6] transition-all font-bold"
              id="contact"
            >
              تواصل معنا
            </button>
          </div>
        </nav>

        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={toggleMenu}
        >
          <div
            className={`bg-white w-full h-auto max-h-[80vh] p-6 transform transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <Image src={logo} alt="Logo" width={100} height={50} />
              <button
                onClick={toggleMenu}
                className="text-[#0F5FA6] focus:outline-none"
              >
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="space-y-4">
              {links.map((link, id) => (
                <li key={id}>
                  <a
                    href={link.href}
                    className="text-[#0F5FA6] hover:text-[#0F5FA6] font-bold text-xl"
                    onClick={(e) => {
                      e.preventDefault(); // منع السلوك الافتراضي
                      handleLinkClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="">
              <button
                type="submit"
                className="mt-6 rounded-full px-6 py-2 border border-[#0F5FA6] text-[#0F5FA6] hover:text-white hover:bg-[#0F5FA6] transition-all font-bold"
              >
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;