import Link from 'next/link';

const About = () => {
  return (
    <div className="prose mx-auto text-justify">
      <h1 className="text-center">Sobre Nós</h1>
      <p>
        Bem-vindo ao nosso catálogo online, desenvolvido com dedicação por um residente de oftalmologia. Nosso site
        serve como uma plataforma de curadoria, onde selecionamos e exibimos anúncios de produtos de terceiros,
        especialmente pensados para outros residentes em todo o Brasil.
      </p>
      <p>
        Importante destacar que não realizamos a venda ou entrega de produtos diretamente. Nosso papel é facilitar o
        acesso a ofertas confiáveis, atuando como um intermediário que apresenta opções verificadas de vendedores
        renomados e confiáveis. Dessa forma, garantimos que você encontre apenas os fornecedores mais sérios e
        comprometidos.
      </p>
      <p>
        Apesar do nosso compromisso com a qualidade e confiabilidade, é importante ressaltar que não temos controle
        direto sobre as vendas ou as entregas. Qualquer questão relacionada a essas etapas deve ser tratada diretamente
        com o vendedor específico.
      </p>
      <p>
        Agradecemos a sua visita e confiança. Continue navegando para descobrir produtos que podem enriquecer sua
        jornada como residente.
      </p>
      <h2>Contato</h2>
      <p>
        Se você tem alguma dúvida ou precisa de ajuda, sinta-se livre para entrar em contato:{' '}
        <Link href="mailto:suporte.theoffshop@gmail.com">suporte.theoffshop@gmail.com</Link>.
      </p>
    </div>
  );
};

export default About;
