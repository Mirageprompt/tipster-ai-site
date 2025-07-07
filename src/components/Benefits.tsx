
import { useEffect, useRef } from 'react';

const Benefits = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const benefits = [
    {
      icon: '⏰',
      title: 'Economize Tempo',
      description: 'Pare de gastar horas analisando jogos. Nossa IA faz todo o trabalho pesado para você.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: '🎯',
      title: 'Aumente a Assertividade',
      description: 'Melhore significativamente suas taxas de acerto com análises baseadas em dados reais.',
      color: 'from-neon-green to-teal'
    },
    {
      icon: '🛡️',
      title: 'Reduza Perdas',
      description: 'Evite apostas mal estruturadas com nosso sistema de validação inteligente.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: '💎',
      title: 'Plano Gratuito',
      description: 'Comece gratuitamente e experimente o poder da IA sem nenhum compromisso.',
      color: 'from-electric-blue to-purple-500'
    },
    {
      icon: '📈',
      title: 'ROI Otimizado',
      description: 'Maximize seus retornos com estratégias personalizadas baseadas no seu perfil de risco.',
      color: 'from-emerald-500 to-green-500'
    },
    {
      icon: '🔔',
      title: 'Alertas em Tempo Real',
      description: 'Receba notificações instantâneas sobre as melhores oportunidades do mercado.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.benefit-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-scale-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="beneficios" className="section-padding bg-gradient-to-b from-slate-900 to-dark-blue" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por que escolher o <span className="gradient-text">Tipster.AI</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vantagens exclusivas que fazem a diferença nos seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card glass-card p-8 text-center hover:scale-105 transition-all duration-500 group opacity-0 cursor-pointer"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${benefit.color} mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-neon-green transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto bg-gradient-to-r from-neon-green/10 to-electric-blue/10 border-neon-green/20">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              🎁 Oferta Especial de Lançamento
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Primeiros 1000 usuários ganham acesso premium gratuito por 30 dias
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Garantir Minha Vaga
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
