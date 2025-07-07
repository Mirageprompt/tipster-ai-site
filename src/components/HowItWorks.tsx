
import { useEffect, useRef } from 'react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: '📊',
      title: 'Análise Profunda',
      description: 'O bot usa estatísticas reais dos últimos confrontos, desempenho dos times e tendências de mercado para criar predições precisas.'
    },
    {
      icon: '🤖',
      title: 'IA Explicativa',
      description: 'Nossa IA responde com linguagem humana explicando exatamente por que cada aposta é recomendada, aumentando sua confiança.'
    },
    {
      icon: '🎯',
      title: 'Múltiplas Inteligentes',
      description: 'Você define o risco e odd desejada, nosso bot monta automaticamente as melhores combinações para maximizar seus lucros.'
    },
    {
      icon: '📷',
      title: 'Análise de Bilhetes',
      description: 'Envie um print do seu bilhete e receba feedback instantâneo sobre a qualidade das suas apostas e sugestões de melhoria.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.remove('opacity-0', 'translate-y-8');
                card.classList.add('opacity-100', 'translate-y-0');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="como-funciona" className="section-padding bg-gradient-to-b from-dark-blue to-slate-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Como o <span className="gradient-text">Tipster.AI</span> Funciona
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologia de ponta que transforma dados em estratégias vencedoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card glass-card p-8 text-center hover:scale-105 transition-all duration-500 group opacity-0 translate-y-8"
            >
              <div className="text-6xl mb-6 animate-float group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-neon-green">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Processo Simples em 3 Passos
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-neon-green rounded-full flex items-center justify-center text-dark-blue font-bold text-xl mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Defina seus Critérios</h4>
                <p className="text-gray-300 text-sm">Escolha esporte, risco e odd desejada</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-electric-blue rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">IA Analisa e Explica</h4>
                <p className="text-gray-300 text-sm">Receba análises detalhadas e explicações</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Aposte com Confiança</h4>
                <p className="text-gray-300 text-sm">Execute as estratégias recomendadas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
