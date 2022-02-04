import React from "react";
import Hello from "./Hello";
import Contacts from "./Contacts";

export default function LandPage(props) {
  return (
    <>
      <div class="content">

        <h1>
          <Hello />
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
          <input type="checkbox" /> Testar unitáriamente os componentes criados<br />
          <input type="checkbox" /> E uma surpresa a mais... <br />
        </p><br />
        <p>Já estão nos requires do <i>package.json</i>
          <ul>
            <li>React ^17.0.2</li>
            <li>React Dom ^17.0.2</li>
            <li>Jest ^27.4.7</li>
            <li>Express ^4.17.2</li>
          </ul>
        </p><br />
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