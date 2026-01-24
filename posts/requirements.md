---
title: 📃 Sobre Levantamento de Requisitos
date: 2022/3/18
description: Nesse artigo darei algumas dicas e formas para levantar os requisitos necessários para o desenvolvimento de um sistema, o desenvolvimento desse documento acompanhará todas as etapas adjacentes do desenvolvimento por tanto é crucial entender as necessidades do usuário.
tag: padrões de desenvolvimento 
---

O levantamento de requisitos serve para identificarmos as necessidades e possíveis problemas dos usuários, por tanto toda regra de negócio pode ser chamada de requisito também.

Essa etapa é essencial para mapearmos a realidade do usuário, então é extremamente importante a **clareza** e **objetividade** de cada requisito. Tenha em mente que assim que os requisitos forem levantados, todas as etapas seguintes do processo de desenvolvimento do sistema serão baseadas nesse documento.

Os requisitos podem ser classificados de duas formas:

**Requisitos Funcionais:**  tratam o comportamento do sistema da forma que o usuário deseja, descrevendo como a aplicação deve se comportar em determinadas situações.

Como por exemplo:
* “O sistema terá que conter um input para buscas”
* “O aplicativo deverá ter um formulário para cadastro”
* O usuário poderá alterar as informações do cadastro”

**Requisitos Não Funcionais:** descrevem como a aplicação será desenvolvida, ou seja, os recursos necessários para colocarmos os requisitos funcionais em prática, estando ligado a características do aplicativo ou restrições.

Como por exemplo:
   - “O aplicativo contará com uma base de dados Azure SQL Database para armazenamento dos dados do usuário”
   - “O formulário para cadastro será feito em HTML e Javascript”

É essencial nessa primeira parte que sejam realizadas algumas entrevistas com o cliente para um entendimento geral do projeto, entendimento do cenário atual do usuário, as principais expectativas do cliente, todas as possíveis restrições do projeto e o que é realmente necessário para a aplicação.

**Tenha em mente que apenas uma reunião pode não ser o suficiente para levantar todos os requisitos necessários para o sistema.**

Algumas dicas de como seguir durante as entrevistas de forma que os requisitos possam surgir de forma coerente:


* Procure manter sempre a mente aberta;
* Deixei que o usuário tenha espaço para trazer a sua visão do projeto;
* Esteja preparado para mudanças nessa fase de levantamento;
* Traga as suas dúvidas ou monte um roteiro de entrevista;
* Anote o máximo de informações que conseguir;

Documentação
---------------------
---

Separe os requisitos entre duas tabelas, uma para os requisitos funcionais (RN) e o outra para os requisitos não-funcionais (RNF).

É importante notar que cada requisito deve ser validado preenchendo alguns critérios como:

* Ser necessário para aplicação;
* Ser claro, de forma que não haja espaço para dupla interpretação;
* Capaz de ser atingível, ou seja, que o time de desenvolvimento seja capaz de executá-lo
* Possuir conexão entre os demais requisitos;

A seguir um exemplo de como organizar os requisitos funcionais e não-funcionais de uma simples tela de login e cadastramento:       

**Requisitos Funcionais**

* RQ01: O aplicativo deverá permitir que o usuário acesse a aplicação com Nome de Usuário e Senha.
* RQ02: O aplicativo deve permitir que o usuário se cadastre na aplicação com os seguintes campos na tela de cadastro:
        Email;
        Nome do Usuário;
        RG
        Senha
        Confirmação de senha;
* RQ03: O aplicativo deve permitir que o usuário altere as suas informações de cadastro, criadas no RQ02, exceto pelo campo de RG.

**Requisitos Não-Funcionais**

* RNF01: Os dados do usuário devem ser armazenados em um banco de dados SQL.

Depois de escrito os requisitos, a várias formas de agrupá-los de acordo com a sua importância para o sistema.

Uma dessa formas é separar os requisitos por Critérios, dessa forma os requisitos podem ser classificados em três formas:

**Requisitos Essenciais:** Extremamente importante para o sistema, relacionado diretamente as necessidades ou problemas do usuário.  Se não implementados a aplicação não pode ser concluída.

**Requisitos Importantes:** Embora não seja de fato o mais importante e não impede que a aplicação entre em produção, caso não esteja implementado dará prejuízos ao negócio.

**Requisitos Desejáveis:** Não trará nenhum prejuízo para o negócio, porém é algo que o cliente gostaria que fosse implementado, então deve-se dar atenção também.

Outra forma de agrupar os requisitos é por prioridade, definindo prioridade entre alta, média ou baixa de cada requisito com a seguinte pergunta: “O que é considerado mais importante para o usuário no sistema?”

Validação
---------------------
---
A validação com o usuário é a última parte de levantamentos de requisitos, é aqui que o usuário revisa todos os requisitos documentados, é esclarecido e verificado cada requisito.  Essa verificação é útil para validar se os requisitos são realmente necessários, se não possui nenhum conflito entre eles, se estão atendendo todas as restrições e se podem ser realmente implementados pelo time.

Esteja atento que nessa etapa, alguns requisitos podem ser alterados ou novos requisitos também podem surgir durante o debate com o usuário.

Por último, depois de todas as correções caso necessário, o aval do cliente de que os requisitos levantados realmente atentem as suas necessidades e expectativas.

Depois da documentação estar finalizada e aprovada, podemos seguir para um Protótipo seguindo todos os nossos requisitos levantados. Mas isso é assunto para outro artigo. 😁

Obrigado por ler até aqui!
