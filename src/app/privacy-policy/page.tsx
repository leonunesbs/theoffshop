import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="prose mx-auto text-justify">
      <h1 className="text-center">Política de Privacidade</h1>
      <p>
        Bem-vindo ao nosso site. Sua privacidade e a proteção de seus dados pessoais são muito importantes para nós.
        Esta política de privacidade explica como utilizamos as informações coletadas durante sua visita e interação com
        nosso site.
      </p>
      <h2>Coleta de Dados</h2>
      <p>
        Não coletamos nenhum dado pessoal que possa identificá-lo diretamente, como seu nome, endereço ou informações de
        contato, a menos que você os forneça voluntariamente. Nosso site utiliza serviços como o Vercel Analytics e o
        Google Analytics para coletar dados não pessoais relacionados ao seu comportamento de navegação. Esses dados
        incluem informações sobre o uso do site, como páginas visitadas e tempo de permanência nas páginas.
      </p>
      <h2>Uso de Informações</h2>
      <p>
        As informações coletadas são utilizadas para melhorar a funcionalidade do site, gerenciar o tráfego de
        visitantes e personalizar conteúdos e anúncios. Este processo nos ajuda a entender as preferências dos usuários
        e a melhorar continuamente nossos serviços.
      </p>
      <h2>Compartilhamento de Informações</h2>
      <p>
        Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais. As
        informações coletadas através dos serviços de analytics são compartilhadas com os provedores de serviço (como
        Vercel e Google) para os fins descritos acima.
      </p>
      <h2>Seus Direitos</h2>
      <p>
        Você tem o direito de solicitar acesso, correção ou exclusão de quaisquer dados pessoais que possamos ter
        coletado. Para exercer esses direitos, por favor, entre em contato conosco no endereço fornecido em nosso site.
      </p>
      <h2>Alterações na Política de Privacidade</h2>
      <p>
        Podemos atualizar nossa política de privacidade periodicamente para refletir mudanças em nossas práticas de
        coleta de dados. Recomendamos que você revise esta página frequentemente para estar informado sobre quaisquer
        mudanças.
      </p>
      <h2>Contato</h2>
      <p>
        Se você tiver qualquer dúvida ou preocupação sobre nossa política de privacidade, ou sobre suas informações, por
        favor, entre em contato conosco através do e-mail:{' '}
        <Link href="mailto:suporte.theoffshop@gmail.com">suporte.theoffshop@gmail.com</Link>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
