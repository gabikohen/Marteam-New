"use client";

import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!isOpen);

  useEffect(() => {
    const triggerAnimation = () => {
      const letters = document.querySelectorAll(".letter");
      const subWords = document.querySelectorAll(".sub-word");

      letters.forEach((letter) => {
        letter.classList.remove("scale-100", "rotate-0");
        letter.classList.add("scale-125", "rotate-[360deg]");
        setTimeout(() => {
          letter.classList.remove("scale-125", "rotate-[360deg]");
          letter.classList.add("scale-100", "rotate-0");
        }, 600);
      });

      subWords.forEach((word, index) => {
        word.classList.add("-translate-y-5");
        setTimeout(() => {
          word.classList.remove("-translate-y-5");
        }, index * 100);
      });
    };

    const interval = setInterval(() => {
      if (Math.random() > 0.7) triggerAnimation();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Quienes Somos", href: "#quienesomos" },
    { label: "Novedades", href: "#novedades" },
 { label: "Comunidad", href: "/comunidad" }, // <- Enlace externo
    { label: "Testimonios", href: "#testimonios" },
    { label: "Blog", href: "#Blog" },
  ];

  return (
    <div id="home" className="w-full p-4 bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A]">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <Link
          href="#home"
          className="flex flex-col items-start sm:items-center group ml-8 sm:ml-20"
        >
          <div className="lg:text-5xl font-black tracking-widest uppercase text-[#E5C07B] drop-shadow-[0_0_12px_rgba(255,247,209,0.9)] filter drop-shadow-[0_0_6px_rgba(255,247,209,0.7)] letter animate-pulse">
            MARTEAM
          </div>
          <div className="text-sm sm:text-base mt-1 space-x-2 flex items-center">
            {["Martin", "Albarracín"].map((word, index) => (
              <span
                key={index}
                className="sub-word inline-block font-semibold text-[#E5C07B] drop-shadow-[0_0_10px_rgba(255,247,209,0.8)] filter drop-shadow-[0_0_6px_rgba(255,247,209,0.7)]"
              >
                {word}
              </span>
            ))}
            <span className="inline-block font-bold text-rose-500 text-xl drop-shadow-[0_0_6px_rgba(255,0,0,0.5)]">
              +
            </span>
            <span className="sub-word inline-block font-semibold text-[#E5C07B] drop-shadow-[0_0_10px_rgba(255,247,209,0.8)] filter drop-shadow-[0_0_6px_rgba(255,247,209,0.7)]">
              Team
            </span>
          </div>
        </Link>

        {/* MENÚ DESKTOP */}
        <ul className="hidden md:flex text-white items-center justify-center gap-5 text-lg mr-10">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>
                <span className="transition-all duration-300 ease-in-out relative inline-block px-2 py-1 hover:text-[#E5C07B] hover:drop-shadow-[0_0_10px_rgba(255,247,209,0.8)]">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
          <li className="ml-5">
            <button className="relative bg-transparent text-white py-4 px-8 rounded-lg border-2 border-[#E5C07B] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 before:content-[''] before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_15px_#6b21a8,0_0_25px_#1e3a8a,0_0_35px_#312e81] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:z-[-1] hover:text-[#FFF7D1] hover:shadow-[0_0_15px_rgba(255,247,209,0.8),0_0_25px_rgba(255,247,209,0.6)] hover:border-[#E5C07B]">
              JUGAR AHORA
            </button>
          </li>
        </ul>

        {/* HAMBURGER MOBILE */}
        <div className="md:hidden block">
          <Hamburger
            toggled={isOpen}
            toggle={toggleMenu}
            color="white"
            size={40}
          />
        </div>
      </div>

      {/* MENÚ MOBILE */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4`}>
        <ul className="text-white flex flex-col items-start font-bold text-2xl p-4 space-y-4">
          {navItems.map((item, index) => (
            <li key={index} className="border-b-2 border-white w-full pb-2">
              <Link href={item.href} onClick={toggleMenu}>
                <span className="hover:text-[#E5C07B] hover:drop-shadow-[0_0_10px_rgba(255,247,209,0.8)] transition-all duration-300 ease-in-out">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
          <li className="mt-4 w-full">
            <button className="bg-[#e0ddcc] hover:bg-[#f7eab3] text-black py-2 px-4 rounded-lg w-full transition-all duration-300 ease-in-out shadow-md hover:shadow-[0_0_15px_rgba(255,247,209,0.8)]">
              JUGAR AHORA
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
