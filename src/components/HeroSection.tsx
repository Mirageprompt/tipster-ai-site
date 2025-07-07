
import { useEffect, useRef } from 'react';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-gradient-to-br from-dark-blue via-slate-900 to-dark-blue opacity-90"></div>
      
      <div ref={heroRef} className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
          Transforme seus{' '}
          <span className="gradient-text">palpites</span>
          <br />
          em estratégias com{' '}
          <span className="gradient-text">IA</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-300">
          Aposte com inteligência. Tipster.AI analisa estatísticas, monta múltiplas e explica cada jogada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-600">
          <button className="btn-primary text-lg px-8 py-4">
            🚀 Testar Agora
          </button>
          <button className="btn-outline text-lg px-8 py-4">
            📺 Ver Demonstração
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in animation-delay-1000">
          <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold gradient-text">92%</div>
            <div className="text-gray-300">Taxa de Acerto</div>
          </div>
          <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold gradient-text">+15k</div>
            <div className="text-gray-300">Usuários Ativos</div>
          </div>
          <div className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl font-bold gradient-text">24/7</div>
            <div className="text-gray-300">Análises em Tempo Real</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
