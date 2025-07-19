"use client";

import React from "react";
import { motion } from "framer-motion";

const beneficios = [
  "Cargas sin límites 24/7",
  "Atención personalizada real",
  "Bonificaciones semanales",
  "Premios únicos y exclusivos",
  "Afiliados con beneficios",
  "Transparencia asegurada",
];

export default function QuienesSomos() {
  return (
    <section
      id="quienesomos"
      className="w-full py-20 px-6 bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] text-white text-center relative overflow-hidden animate-[pulseBg_8s_ease-in-out_infinite]"
    >
      <style>
        {`
          @keyframes pulseBg {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>

      <div className="max-w-5xl mx-auto">
     <h2
  className="text-4xl sm:text-5xl font-extrabold mb-6"
  style={{
    background: "linear-gradient(45deg, #E5C07B, #fceabb, #E5C07B)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textShadow:
      "0 0 10px rgba(229, 192, 123, 0.6), 0 0 15px rgba(229, 192, 123, 0.4)",
    filter: "drop-shadow(0 0 6px rgba(229, 192, 123, 0.6))",
    letterSpacing: "0.5px",
    paddingLeft: "4px" // margen interno para que no se corte el signo
  }}
>
  ¿Quiénes Somos?
</h2>


        <p className="text-lg sm:text-xl mb-12 leading-relaxed text-gray-100 max-w-3xl mx-auto">
          En{" "}
          <span className="text-[#E5C07B] font-bold">MarTeam</span> somos tu
          socio mayorista en fichas digitales para casino. Lo que nos diferencia
          de los demás cajeros es nuestra combinación única de{" "}
          <span className="text-pink-400 font-semibold drop-shadow-[0_0_10px_#ec4899]">
            velocidad, atención humana y beneficios reales.
          </span>{" "}
          No vendemos fichas: entregamos confianza, bonos y una experiencia
          inigualable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {beneficios.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-transparent backdrop-blur-md border border-white/30 shadow-2xl hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-lg font-bold text-white drop-shadow-[0_0_8px_#f472d0]">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
<motion.div
  className="mt-12 text-2xl sm:text-3xl font-bold text-center"
  style={{
    backgroundImage: "linear-gradient(90deg, #ff4de3, #ff81ff, #ec4899)",
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textShadow: `
      0 0 10px #ff4de3,
      0 0 20px #ff4de3,
      0 0 30px #ff81ff,
      0 0 40px #ec4899,
      0 0 50px rgba(255, 105, 180, 1)
    `,
    filter: "drop-shadow(0 0 10px rgba(255, 20, 147, 1))",
  }}
  initial={{ opacity: 0.4 }}
  animate={{ opacity: [0.4, 1, 0.4] }}
  transition={{
    repeat: Infinity,
    duration: 2.5,
    ease: "easeInOut",
  }}
>
  ¡Sumate a <span className="uppercase">MarTeam</span> y llevá tus fichas al siguiente nivel!
</motion.div>

      </div>
    </section>
  );
}
