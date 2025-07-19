"use client";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] text-white pt-20 pb-10 px-6 sm:px-12 lg:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16 border-b border-white/20 pb-10 text-center sm:text-left">
        {/* Logo y descripción - col-span-2 para empujar a la derecha */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#E5C07B] drop-shadow-[0_0_12px_#facc15]">
            MARTEAM
          </h2>
          <p className="mt-4 text-base lg:text-xl text-white/90">
            Mayorista de fichas online. Rapidez, seguridad y atención 24/7.
          </p>
          <div className="flex justify-center sm:justify-start gap-6 mt-5">
            <FaFacebookF className="text-2xl hover:text-blue-500 transition drop-shadow-[0_0_5px_#3b82f6]" />
            <FaInstagram className="text-2xl hover:text-pink-500 transition drop-shadow-[0_0_5px_#ec4899]" />
            <FaTelegramPlane className="text-2xl hover:text-sky-300 transition drop-shadow-[0_0_5px_#38bdf8]" />
          </div>
        </div>

        {/* Soporte */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Soporte</h3>
          <ul className="space-y-3 text-lg text-white/90">
            <li className="hover:text-yellow-300 transition">Centro de Ayuda</li>
            <li className="hover:text-yellow-300 transition">Preguntas Frecuentes</li>
            <li className="hover:text-yellow-300 transition">Servicio al Cliente</li>
          </ul>
        </div>

        {/* Compañía */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Compañía</h3>
          <ul className="space-y-3 text-lg text-white/90">
            <li className="hover:text-yellow-300 transition">Sobre Nosotros</li>
            <li className="hover:text-yellow-300 transition">Afíliate</li>
            <li className="hover:text-yellow-300 transition">Términos y Condiciones</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Contacto</h3>
          <p className="text-lg text-white/90 mb-2">
           Tel:{" "} +54 9 11 2345 6789
            
          </p>
          <p className="text-lg text-white/90 mb-2">
           ventas@martinalbarracin.com
            
          </p>
        </div>
      </div>

      {/* Copyright centrado */}
      <div className="mt-10 flex justify-center text-base lg:text-lg text-white/80 text-center">
        <p>
          © 2025 Marteam by Martín Albarracín. Todos los derechos reservados.
        </p>
      </div>

      {/* Botón de WhatsApp flotante */}
      <a
        href="https://wa.me/5491123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </footer>
  );
}
