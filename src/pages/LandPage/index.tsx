import React from "react";
import Hello from "../../components/Hello";
import Contacts from "../../components/Contacts";

export default function LandPage() {
  return (
    <>
      <div>
        <h1>
          <Hello name="stranger" />
        </h1>
        <h1>Bem vindo ao Dojo React IEBT</h1>
        <p>Nosso desafio hoje é criar um chat com nossos contatos</p>
        <p>Nessa mesma tela que você está vendo precisamos de uma lista de todos os contatos(e seus dados) que temos
          disponíveis,
          vocês vai achar um arquivo json em <strong>data/contacts.json</strong>.</p>
        <p>Para cada contato devo conseguir ver nossa telinha de envio de mensagens. Caso ja tenhamos mensagens
          enviadas devemos vê-las nessa lista, se não vamos precisar criar uma nova conversa com a mensagem padrão
          <br /><strong><i>Oi, gostaria de falar uma coisa contigo!</i></strong>
        </p>
        <p>Lembre-se dos <strong>principios SOLID</strong> e que tudo deve ser um <strong>componente testável e
          reutilizável</strong>!</p>
        <br />
        <p>Para hoje vamos precisar de:
          <br />
          <input type="checkbox" /> Criar a lista de contatos com todos os dados disponíveis<br />
          <input type="checkbox" /> Mudar para a tela de mensagens quando clicar na lista<br />
          <input type="checkbox" /> Manter as conversas e seus estados <i>na memória do navegador</i><br />
          <input type="checkbox" /> Testar automaticamente os componentes criados<br />
          <input type="checkbox" /> E uma surpresa a mais... <br />
        </p><br />
        <p>Já estão nos requires do <i>package.json</i>
          <ul>
            <li>react ^17.0.2</li>
            <li>react-dom ^17.0.2</li>
            <li>react-redux ^7.2.6</li>
            <li>react-scripts 5.0.0</li>
            <li>redux ^4.1.2</li>
            <li>redux-thunk ^2.4.1</li>
            <li>styled-components ^5.3.3</li>
            <li>typescript ^4.5.5</li>
          </ul>
        </p><br />
        <p>Para fazer o clone da aplicação acesse
          <a href="https://github.com/marcosheleno/dojo-react">https://github.com/marcosheleno/dojo-react</a>
        </p>
        <p>
          <h3>Regras do DOJO</h3>
          <ol>
            <li>O timebox será configurado para 10min, caso necessário, podemos aumentar ou diminuir esse tempo</li>
            <li>Teremos sempre 1 desenvolvedor e 1 ajudante</li>
            <li>O desenvolvedor pode refatorar todo o código na sua vez para cumprir o objetivo</li>
            <li>O ajudante deve orientar o desenvolvedor e estar atento para sua próxima rodada</li>
            <li>O código é colaborativo</li>
            <li>Ninguém pode falar enquanto o timebox está ativo</li>
            <li>Caso precisem tirar alguma duvida o timebox será parado</li>
            <li>Cada dúvida tem limite de 5 minutos</li>
          </ol>
        </p>
        <Contacts />

        <div>
          <p>Links de apoio:
            <ul>
              <li><a href="https://reactjs.org/docs/testing-recipes.html#setup--teardown">https://reactjs.org/docs/testing-recipes.html#setup--teardown</a></li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
}