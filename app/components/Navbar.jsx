"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import logo from "../../public/logo.png";
import { useTranslation } from 'react-i18next';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const links = [
    { name: t('navbar.home'), href: "#Home" },
    { name: t('navbar.about'), href: "#About" },
    { name: t('navbar.goals'), href: "#OurGoals" },
    { name: t('navbar.courses'), href: "#Training_courses" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href) => {
    setIsMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    changeLanguage(newLang);
  };

  return (
    <div className="bg-[#D1F7FF]">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          <div className="text-xl font-bold">
            <Image src={logo} alt="Logo" width={100} height={50} />
          </div>

          <div className="flex items-center gap-4">
            {/* زر اللغة - شكل أيقوني */}
            <div className=" flex">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 border border-[#0F5FA6] text-[#0F5FA6] hover:bg-[#0F5FA6] hover:text-white px-4  py-[2px] rounded-[15px] transition-all"
              >
                <FaGlobe />
                <span className="text-lg font-bold">
                  {i18n.language === "en" ? "ع" : "E"}
                </span>
              </button>
            </div>

            {/* زر القائمة الجانبية (للموبايل) */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#0F5FA6] focus:outline-none"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1">
            <ul className="flex items-center gap-10">
              {links.map((link, id) => (
                <li key={id}>
                  <a
                    href={link.href}
                    className="text-[#1D1D1D] hover:text-[#0F5FA6] font-bold text-xl transition-all"
                    onClick={(e) => {
                      e.preventDefault();
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
              {t('navbar.contact')}
            </button>
          </div>
        </nav>

        {/* القائمة الجانبية للموبايل */}
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

            {/* زر اللغة داخل القائمة الجانبية */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 border border-[#0F5FA6] text-[#0F5FA6] hover:bg-[#0F5FA6] hover:text-white px-4 py-2 rounded-full transition-all"
              >
                <FaGlobe />
                <span className="text-lg font-bold">
                  {i18n.language === "en" ? "ع" : "E"}
                </span>
              </button>
            </div>

            <ul className="space-y-4">
              {links.map((link, id) => (
                <li key={id}>
                  <a
                    href={link.href}
                    className="text-[#0F5FA6] hover:text-[#0F5FA6] font-bold text-xl"
                    onClick={(e) => {
                      e.preventDefault();
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
                {t('navbar.contact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
