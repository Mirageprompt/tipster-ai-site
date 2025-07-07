
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Tipster.AI</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              A plataforma de apostas esportivas mais inteligente do Brasil. 
              Transforme suas apostas com o poder da inteligência artificial.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300">
                📘 Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300">
                📸 Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300">
                🐦 Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300">
                💬 Telegram
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-400 hover:text-neon-green transition-colors duration-300">Início</a></li>
              <li><a href="#como-funciona" className="text-gray-400 hover:text-neon-green transition-colors duration-300">Como Funciona</a></li>
              <li><a href="#beneficios" className="text-gray-400 hover:text-neon-green transition-colors duration-300">Benefícios</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-neon-green transition-colors duration-300">Demonstração</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300">Preços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Suporte</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300">Central de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300">Contato</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300">Tutoriais</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300">Status do Sistema</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm">
                Cookies
              </a>
              <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm">
                Jogo Responsável
              </a>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>© {currentYear} Tipster.AI. Todos os direitos reservados.</p>
              <p className="mt-1">
                🔞 Proibido para menores de 18 anos • Aposte com responsabilidade
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 glass-card border border-yellow-500/30 bg-yellow-500/5 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-300">
              ⚠️ <strong>Aviso Legal:</strong> Apostas envolvem riscos financeiros. 
              O Tipster.AI é uma ferramenta de análise e não garante lucros. 
              Aposte apenas o que pode perder e sempre de forma responsável.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
