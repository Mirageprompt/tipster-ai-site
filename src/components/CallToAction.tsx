
const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-dark-blue via-slate-900 to-dark-blue relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-green/5 to-electric-blue/5"></div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Está pronto para apostar com{' '}
            <span className="gradient-text">inteligência</span>?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Junte-se a milhares de apostadores que já transformaram suas estratégias com o poder da IA
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 mb-16 border-2 border-neon-green/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-4 gradient-text">🎁 Oferta Especial</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <span className="text-neon-green mr-3">✓</span>
                  30 dias grátis premium
                </li>
                <li className="flex items-center">
                  <span className="text-neon-green mr-3">✓</span>
                  Análises ilimitadas
                </li>
                <li className="flex items-center">
                  <span className="text-neon-green mr-3">✓</span>
                  Suporte prioritário
                </li>
                <li className="flex items-center">
                  <span className="text-neon-green mr-3">✓</span>
                  Garantia de resultado
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="mb-6">
                <div className="text-sm text-gray-400 line-through">De R$ 97/mês</div>
                <div className="text-4xl font-bold gradient-text">GRÁTIS</div>
                <div className="text-sm text-gray-400">Por tempo limitado</div>
              </div>
              
              <button className="btn-primary text-lg px-8 py-4 w-full mb-4">
                🚀 Começar Agora
              </button>
              
              <div className="text-sm text-gray-400">
                Sem compromisso • Cancele quando quiser
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="btn-primary text-xl px-12 py-4">
            🤖 Acessar o Bot
          </button>
          <button className="btn-outline text-xl px-12 py-4">
            💬 Falar com a Equipe
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">🔒</div>
            <h4 className="font-semibold mb-2">100% Seguro</h4>
            <p className="text-gray-400 text-sm">Seus dados protegidos com criptografia SSL</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">⚡</div>
            <h4 className="font-semibold mb-2">Ativação Instantânea</h4>
            <p className="text-gray-400 text-sm">Comece a usar imediatamente após o cadastro</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="font-semibold mb-2">Resultado Garantido</h4>
            <p className="text-gray-400 text-sm">Ou devolvemos seu dinheiro em 30 dias</p>
          </div>
        </div>

        <div className="mt-12 p-6 glass-card border border-yellow-500/30 bg-yellow-500/5">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl mr-2">⏰</span>
            <span className="text-lg font-semibold text-yellow-400">Oferta por tempo limitado!</span>
          </div>
          <p className="text-gray-300">
            Apenas os primeiros 500 usuários terão acesso ao preço promocional.
            <br />
            <span className="text-neon-green font-semibold">Restam apenas 127 vagas!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
