"use client";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import logo from "../../public/logo.png";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  // بيانات القائمة
  const links = [
    { textKey: "footer.links.home", href: "#" },
    { textKey: "footer.links.about", href: "#" },
    { textKey: "footer.links.goals", href: "#" },
    { textKey: "footer.links.courses", href: "#" },
    { textKey: "footer.links.contact", href: "#" },
  ];

  // بيانات الأيقونات
  const icons = [
    { icon: FaLinkedinIn, href: "#" },
    { icon: FaYoutube, href: "#" },
    { icon: FaXTwitter, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaFacebookF, href: "#" },
  ];

  return (
    <footer className="bg-[#f5fcff] text-gray-700 py-8" dir="rtl">
      <div className="container mx-auto px-4 text-center">
        {/* الشعار والقائمة */}
        <div className="flex flex-col items-center space-y-4">
          <Image src={logo} alt={t('footer.logo_alt')} className="w-16 h-16" />
          <ul className="flex flex-wrap justify-center gap-4 md:gap-12 text-sm md:text-base font-medium">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-[#3998f0] font-semibold text-xl">
                  {t(link.textKey)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* الأيقونات */}
        <div className="flex justify-center flex-wrap gap-4 my-6">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              className="p-3 border border-gray-400 rounded-full hover:bg-blue-100"
            >
              <icon.icon className="text-gray-600 text-xl" />
            </a>
          ))}
        </div>

        {/* الحقوق */}
        <div className="border-t border-gray-300 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-center items-center">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;