
import { useState } from 'react';

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState('analysis');

  const demoContent = {
    analysis: {
      title: 'Análise Automática',
      content: (
        <div className="space-y-4">
          <div className="glass-card p-6">
            <h4 className="text-lg font-semibold text-neon-green mb-3">⚽ Manchester City vs Arsenal</h4>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-400">Probabilidade de vitória:</span> Man City 68% | Arsenal 22% | Empate 10%</p>
              <p><span className="text-gray-400">Últimos 5 jogos:</span> City 4V-1E | Arsenal 3V-2D</p>
              <p><span className="text-gray-400">Gols médios:</span> City 2.8 | Arsenal 1.4</p>
              <p className="text-neon-green font-medium">💡 Recomendação: City vence + Over 2.5 gols (Odd: 2.1)</p>
            </div>
          </div>
        </div>
      )
    },
    multiple: {
      title: 'Múltipla Inteligente',
      content: (
        <div className="space-y-4">
          <div className="glass-card p-6">
            <h4 className="text-lg font-semibold text-neon-green mb-3">🎯 Múltipla Recomendada - Odd: 4.2</h4>
            <div className="space-y-3">
              <div className="border-l-4 border-neon-green pl-4">
                <p className="font-medium">Flamengo vs Botafogo</p>
                <p className="text-sm text-gray-400">Flamengo vence (1.8) - 85% confiança</p>
              </div>
              <div className="border-l-4 border-electric-blue pl-4">
                <p className="font-medium">Barcelona vs Real Madrid</p>
                <p className="text-sm text-gray-400">Over 2.5 gols (1.6) - 78% confiança</p>
              </div>
              <div className="border-l-4 border-teal pl-4">
                <p className="font-medium">Liverpool vs Chelsea</p>
                <p className="text-sm text-gray-400">Ambas marcam (1.5) - 82% confiança</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    explanation: {
      title: 'IA Explicativa',
      content: (
        <div className="space-y-4">
          <div className="glass-card p-6">
            <h4 className="text-lg font-semibold text-neon-green mb-3">🤖 Por que esta aposta é boa?</h4>
            <div className="space-y-3 text-sm">
              <p><strong>Contexto:</strong> Manchester City joga em casa contra Arsenal no Etihad Stadium.</p>
              <p><strong>Forma atual:</strong> City vem de 4 vitórias consecutivas, enquanto Arsenal perdeu 2 dos últimos 3 jogos.</p>
              <p><strong>Histórico:</strong> Nos últimos 10 confrontos, City venceu 7 vezes no Etihad.</p>
              <p><strong>Lesões:</strong> Arsenal tem 3 titulares lesionados, incluindo o artilheiro da equipe.</p>
              <p className="text-neon-green"><strong>Conclusão:</strong> Alta probabilidade de vitória do City com mais de 2 gols marcados.</p>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <section id="demo" className="section-padding bg-gradient-to-b from-dark-blue to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Veja o <span className="gradient-text">Tipster.AI</span> em Ação
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Demonstração interativa das principais funcionalidades
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center mb-8 space-x-2">
            {Object.entries(demoContent).map(([key, { title }]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mb-2 ${
                  activeTab === key
                    ? 'bg-neon-green text-dark-blue'
                    : 'glass-card text-gray-300 hover:text-white'
                }`}
              >
                {title}
              </button>
            ))}
          </div>

          <div className="min-h-[400px] glass-card p-8 rounded-2xl">
            <div className="animate-fade-in">
              {demoContent[activeTab as keyof typeof demoContent].content}
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary text-lg px-8 py-4 mr-4">
              🚀 Ver Bot em Ação
            </button>
            <button className="btn-outline text-lg px-8 py-4">
              📋 Agendar Demo Personalizada
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 text-center">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-semibold mb-2">Interface Intuitiva</h3>
            <p className="text-gray-300">Fácil de usar, mesmo para iniciantes</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Respostas Instantâneas</h3>
            <p className="text-gray-300">Análises em tempo real, 24/7</p>
          </div>
          <div className="glass-card p-6 text-center">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">Multiplataforma</h3>
            <p className="text-gray-300">Web, mobile e integração com Telegram</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
