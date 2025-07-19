'use client';

import { useState, useEffect } from 'react';
import { Instagram, MessageCircle, Facebook, Users, TrendingUp, Clock } from 'lucide-react';

const CommunityPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const SocialCard = ({ icon: Icon, title, description, buttonText, color, delay }) => (
    <div 
      className={`
        group relative overflow-hidden rounded-3xl border-2 border-[#E5C07B]/20 
        bg-gradient-to-br from-[#E5C07B]/5 to-transparent p-6 sm:p-8 
        transition-all duration-500 hover:border-[#E5C07B] hover:-translate-y-3 
        hover:shadow-2xl hover:shadow-[#E5C07B]/20
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
      style={{ 
        transitionDelay: `${delay}ms`,
        animation: isVisible ? 'slideInUp 0.8s ease-out forwards' : 'none'
      }}
    >
      {/* Efecto de luz deslizante */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#E5C07B]/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      
      <div className="relative z-10 text-center">
        <div className={`mx-auto mb-6 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full ${color} bg-opacity-20 transition-all duration-300 group-hover:scale-110`}>
          <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${color}`} />
        </div>
        
        <h3 className="mb-4 text-xl sm:text-2xl font-bold text-[#E5C07B]">{title}</h3>
        <p className="mb-8 text-sm sm:text-base text-[#E5C07B]/80 leading-relaxed">{description}</p>
        
        <button className="
          group/btn relative inline-flex items-center justify-center px-8 py-3 
          overflow-hidden rounded-full bg-gradient-to-r from-[#E5C07B] to-[#F4D03F] 
          text-sm sm:text-base font-bold text-[#0F0F0F] transition-all duration-300 
          hover:scale-105 hover:shadow-lg hover:shadow-[#E5C07B]/30
          active:scale-95
        ">
          <span className="relative z-10 uppercase tracking-wide">{buttonText}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4D03F] to-[#E5C07B] opacity-0 transition-opacity duration-300 group-hover/btn:opacity-100" />
        </button>
      </div>
    </div>
  );

  const StatCard = ({ number, label, delay }) => (
    <div 
      className={`
        text-center p-4 sm:p-6 transition-all duration-700
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E5C07B] mb-2 bg-gradient-to-r from-[#E5C07B] to-[#F4D03F] bg-clip-text text-transparent">
        {number}
      </div>
      <div className="text-xs sm:text-sm text-[#E5C07B]/80 uppercase tracking-widest font-medium">
        {label}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] text-[#E5C07B] overflow-hidden">
      {/* Partículas de fondo */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#E5C07B] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="text-center pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12">
          <div className={`
            mb-6 sm:mb-8 transition-all duration-1000
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-[#E5C07B] to-[#F4D03F] bg-clip-text text-transparent mb-4 sm:mb-6">
              COMUNIDAD
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-[#E5C07B]/90 max-w-2xl mx-auto">
              Conectando personas, creando experiencias
            </p>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center py-8 sm:py-12 lg:py-16 relative">
          {/* Efecto de luz radial */}
          <div className="absolute inset-0 bg-gradient-radial from-[#E5C07B]/10 via-transparent to-transparent animate-pulse" />
          
          <div className={`
            relative z-10 transition-all duration-1000 delay-300
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
              Únete a Nuestra<br />
              <span className="bg-gradient-to-r from-[#E5C07B] to-[#F4D03F] bg-clip-text text-transparent">
                Comunidad
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#E5C07B]/80 max-w-3xl mx-auto leading-relaxed">
              Descubre contenido exclusivo, conecta con personas increíbles y forma parte de algo especial
            </p>
          </div>
        </section>

        {/* Social Cards Grid */}
        <section id="comunidad" className="py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            <SocialCard
              icon={Instagram}
              title="Instagram"
              description="Síguenos para contenido visual increíble, stories exclusivas y momentos únicos de nuestra comunidad."
              buttonText="Seguir en Instagram"
              color="text-pink-500"
              delay={100}
            />
            <SocialCard
              icon={MessageCircle}
              title="Telegram"
              description="Únete a nuestro canal para recibir actualizaciones instantáneas, contenido exclusivo y participar en conversaciones."
              buttonText="Unirse a Telegram"
              color="text-blue-500"
              delay={200}
            />
            <SocialCard
              icon={Facebook}
              title="Facebook"
              description="Conéctate con nuestra comunidad, participa en eventos y mantente al día con todas las novedades."
              buttonText="Seguir en Facebook"
              color="text-blue-600"
              delay={300}
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="bg-gradient-to-r from-[#E5C07B]/5 to-[#F4D03F]/5 rounded-3xl border border-[#E5C07B]/20 p-8 sm:p-12 lg:p-16 backdrop-blur-sm">
            <div className={`
              text-center mb-8 sm:mb-12 transition-all duration-1000
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Nuestra Comunidad en Números
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#E5C07B] to-[#F4D03F] mx-auto rounded-full" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              <StatCard number="10K+" label="Seguidores" delay={400} />
              <StatCard number="500+" label="Posts Diarios" delay={500} />
              <StatCard number="24/7" label="Actividad" delay={600} />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="text-center bg-gradient-to-r from-[#E5C07B]/10 to-[#F4D03F]/10 rounded-3xl border border-[#E5C07B]/30 p-8 sm:p-12 lg:p-16 backdrop-blur-sm">
            <div className={`
              transition-all duration-1000 delay-700
              ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
            `}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                ¿Listo para Unirte?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-[#E5C07B]/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
                Elige tu plataforma favorita y comienza a formar parte de nuestra increíble comunidad
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                {['Instagram', 'Telegram', 'Facebook'].map((platform, index) => (
                  <button
                    key={platform}
                    className={`
                      w-full sm:w-auto px-8 py-3 border-2 border-[#E5C07B] 
                      text-[#E5C07B] rounded-full font-bold uppercase tracking-wide 
                      transition-all duration-300 hover:bg-[#E5C07B] hover:text-[#0F0F0F] 
                      hover:-translate-y-1 hover:shadow-lg hover:shadow-[#E5C07B]/30
                      active:scale-95
                      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                    `}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 sm:py-12 border-t border-[#E5C07B]/20">
          <div className={`
            transition-all duration-1000 delay-1000
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
            <p className="text-sm sm:text-base text-[#E5C07B]/60">
              © 2025 Comunidad. Conectando el mundo, una persona a la vez.
            </p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default CommunityPage;