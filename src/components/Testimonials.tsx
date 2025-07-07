
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Apostador Profissional',
      avatar: '👨‍💼',
      rating: 5,
      text: 'Minha taxa de acerto aumentou de 45% para 78% em apenas 2 meses usando o Tipster.AI. As explicações da IA me ajudaram a entender melhor o mercado de apostas.',
      profit: '+R$ 15.400'
    },
    {
      name: 'Marina Santos',
      role: 'Investidora em Apostas',
      avatar: '👩‍💻',
      rating: 5,
      text: 'Incrível como a IA consegue identificar value bets que eu nunca encontraria sozinha. O ROI do meu bankroll triplicou desde que comecei a usar.',
      profit: '+R$ 23.800'
    },
    {
      name: 'Roberto Lima',
      role: 'Tipster Independente',
      avatar: '👨‍🎓',
      rating: 5,
      text: 'A funcionalidade de múltiplas inteligentes é revolucionária. Não perco mais tempo montando apostas - o bot faz tudo com uma precisão impressionante.',
      profit: '+R$ 31.200'
    },
    {
      name: 'Ana Costa',
      role: 'Apostadora Recreativa',
      avatar: '👩‍🦰',
      rating: 5,
      text: 'Comecei como iniciante e já estou lucrando consistentemente. As explicações são claras e me ensinaram muito sobre apostas esportivas.',
      profit: '+R$ 8.600'
    },
    {
      name: 'João Oliveira',
      role: 'Trader Esportivo',
      avatar: '👨‍🚀',
      rating: 5,
      text: 'A análise de bilhetes salvou minha banca várias vezes. O feedback instantâneo me ajuda a evitar apostas emocionais e manter a disciplina.',
      profit: '+R$ 19.500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-slate-900 to-dark-blue">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos <span className="gradient-text">usuários</span> dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Resultados reais de pessoas reais que transformaram suas apostas
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card p-8 md:p-12 rounded-2xl overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-neon-green/20 hover:bg-neon-green/30 flex items-center justify-center transition-colors duration-300"
              >
                ←
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-neon-green' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-neon-green/20 hover:bg-neon-green/30 flex items-center justify-center transition-colors duration-300"
              >
                →
              </button>
            </div>

            <div className="text-center animate-fade-in">
              <div className="text-6xl mb-6">{testimonials[currentTestimonial].avatar}</div>
              
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="mb-4">
                <div className="text-2xl font-bold gradient-text mb-2">
                  {testimonials[currentTestimonial].profit}
                </div>
                <div className="text-sm text-gray-400">Lucro nos últimos 6 meses</div>
              </div>

              <div>
                <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                <div className="text-gray-400">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="glass-card p-6">
            <div className="text-3xl font-bold gradient-text mb-2">15,247</div>
            <div className="text-gray-300">Usuários Ativos</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-bold gradient-text mb-2">92%</div>
            <div className="text-gray-300">Taxa de Satisfação</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-bold gradient-text mb-2">R$ 2.8M</div>
            <div className="text-gray-300">Lucro dos Usuários</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-gray-300">Suporte Ativo</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
