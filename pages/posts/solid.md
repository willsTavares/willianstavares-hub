---
title: 📃 O que é S.O.L.I.D?
date: 2022/6/14
description: Aprenda os principios de S.O.L.I.D.
tag: arquitetura de sofware, padrões de desenvolvimento
---

# S.O.L.I.D
<hr>

**SOLID** é um acrônimo criado por Michael Feathers, para os cinco princípios que julgou os mais utilizados na Programação Orientada a Objetos e design de código. Estes princípios, foram abordados inicialmente por Robert C. Martin — o famoso Uncle Bob — em seu artigo “Os princípios de Design Orientado a Objetos”.

Cada princípio traz uma abordagem e maneira de desenvolver códigos mais limpos e coesos, podendo ser utilizado e aplicado em qualquer linguagem de programação orientada a objetos. Nos tópicos abaixo, serão exemplificados cada princípio e sua função.


**S** – Single Responsibility Principle (Princípio da Responsabilidade Única)
**O** – Open-Closed Principle (Princípio Aberto-Fechado)
**L** – Liskov Substitution Principle (Princípio da Substituição de Liskov)
**I** – Interface Segregation Principle (Princípio da Segregação da Interface)
**D** – Dependacy Inversion Principle (Princípio da Inversão das Dependências)



## Single Responsibility Principle (SRP)
<hr>


**Princípio da Responsabilidade Única** — Uma classe deve ter um, e somente um, motivo para mudar.

O princípio da responsabilidade única deixa claro que uma classe deve ser especializada somente em uma tarefa, ou seja, somente uma responsabilidade dentro do sistema, dessa maneira a classe só possuirá um motivo para que seja feito alguma alteração.

O termo utilizado para classes com muitas responsabilidades é o God Class (Classe Deus) e deve ser evitado pela difícil manutenção, por conta de os perigos de modificação poder comprometer as outras tarefas executadas pela mesma classe além da complexidade de reaproveitamento de código.

Quando criado classes para o sistema, idealmente é imaginado quais possibilidades e funções poderão executar. Nos errôneos casos, esta classe terá diversas responsabilidades para se preocupar.

Digamos que exista uma classe que representa um retângulo, com propriedades da sua área. O retângulo se preocupará em manter sua área, mas também em desenhá-la, como na imagem abaixo:


![image.png](/.attachments/image-e6716a03-677e-4d30-be79-015bc6b492a9.png)

Se um dia precisarmos alterar o modo de desenharmos a área do retângulo, será preciso precisar modificar a classe. Qualquer nova alteração irá gerar manuseio e modificação da classe Rectangle, que consequentemente os demais módulos que a usam, deverão ser revisados e testados.

Seguindo o princípio SRP, a classe Rectangle deverá se preocupar apenas com a sua área. Desta maneira deverá ser externalizado para outra classe a função de desenhar, como na imagem abaixo:


![image.png](/.attachments/image-0905a6b9-e77e-4005-929c-7d943ff721ff.png)


Com isto, o uso da classe Rectangle passa a ser descartado de modificações, apenas gerando alteração na única, e somente uma, funcionalidade.

Possíveis problemas de violação do princípio SRP:

- Falta de coesão;
- Alto acoplamento;
- Dificuldades com testes automatizados;
- Reaproveitamento de código.


## Open-Closed Principle (OCP)
<hr>

**Princípio Aberto-Fechado** — Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação.

O princípio de Aberto-Fechado diz que você pode ser capaz de estender um objeto ou entidade, mas os mesmos devem ser fechados para modificações. Ou seja, para adição de novas funcionalidades ou comportamentos dos sistemas, é esperado que a entidade seja estendida e não alterado diretamente.

O pensamento, de **separar o comportamento extensível por trás de uma interface e inverter as dependências** foi idealizado pelo Uncle Bob, com o intuito de concentrar tudo que seja possivelmente modificado e que tenha tendência de crescimento, em interfaces, assim sendo possível a inversão da dependência no código.

Imagine que exista uma classe FolhaPagamento que realiza o fechamento, e recebe os funcionários para cálculo do pagamento. Para que a lógica funcione, ela deverá fazer uma validação do tipo de contrato, e executar o método que contabiliza o valor a ser pago. Como na imagem abaixo:

![image.png](/.attachments/image-ba243273-3744-4c58-917f-62e2e37cc129.png)

Seguindo por este lado, quando a empresa precisar adicionar um novo meio de contrato, por exemplo um PJ, será alterado a classe FolhaPagamento para uma nova validação e busca do método correto com a somatória do valor. Esta abordagem fere o OCP, pois a classe está aberta para modificações.

Um dos melhores cenários a se trabalhar para mitigar o problema, é criando uma interface para remuneração, onde existirá somente um método que será chamado e implementado pelas classes de contrato. Como no exemplo abaixo:

![image.png](/.attachments/image-dc4185fd-3569-418b-b398-501f47752eb4.png)


## Liskov Substitution Principle (LSP)
<hr>

O princípio de substituição de Liskov diz que uma classe derivada pode ser substituída por sua classe base sem que isso afete a execução correta do programa. 
Com esse princípio podemos aplicar o Polimorfismo para sempre utilizar as classes derivadas fazendo a devida referência à classe base garantindo a solidez do sistema.


## Interface Segregation Principle (ISP)
<hr>

O princípio da segregação da interface diz que uma classe não deve possuir métodos e interface que não serão utilizadas, ou seja é melhor termos interfaces mais especificas para sua funcionalidade do que interfaces genéricas, dessa forma a classe não é forçada a implementar métodos que não serão utilizados por ela.

## Dependency Inversion Principle (DIP)
<hr>

O princípio da inversão de dependência afirma que devemos depender mais de abstrações do que implementações. Dessa forma evitamos ao máximo acoplamento, podendo aproveitar o código em outros sistemas, sem a necessidade de trazer as dependências junto a classe, a forma correta é utilizar Injeção de Dependências via método.


Em conclusão, os princípios S.O.L.I.D oferecem uma abordagem robusta e orientada a objetos para o desenvolvimento de software, promovendo a criação de código flexível, escalável e de fácil manutenção. Ao aderir a esses princípios — Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation e Dependency Inversion — os desenvolvedores podem criar sistemas mais resilientes às mudanças, menos propensos a erros e mais fáceis de entender e expandir.