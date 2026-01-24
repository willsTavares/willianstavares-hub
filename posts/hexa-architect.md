---
title: 📃 Arquitetura Hexagonal
date: 2023/8/18
description: Descubra como a Arquitetura Hexagonal transforma o design de software, trazendo benefícios práticos para seu projeto. Explore sua eficácia e aplicação neste estudo aprofundado.
tag: arquitetura de software
---
# Arquitetura Hexagonal

A Arquitetura Hexagonal consiste em dividir em camadas as classes de um sistema, onde as regras de negócio e entidades ficam na camada principal, a de Domínio, dessa forma é possível garantir a integridade da aplicação, reutilização das regras de negócio para diversas plataformas como web e mobile além da fácil substituição de tecnologias externas como banco de dados devido à falta de dependências de framework.

![Arquitetura Hexagonal](/images/hexagonal.svg)

## Adaptadores e portas

Com a camada de Domínio sendo a camada principal da arquitetura, é importante que ela esteja isolada e seja acessada de forma restrita por ferramentas externas, dessa maneira as formas de comunicação entre outras camadas e a camada de Domínio se dá via Adaptadores.

![Adaptadores](/images/hexagonal-adapters1.svg)

Adaptadores atuam se comunicando com as portas, para que haja comunicação interna e externa da aplicação. Uma porta (interface) é uma especificação de como o domínio pode ser utilizado, ou seja, para entrada ou saída da aplicação:

- Porta de Entrada (Input) são as interfaces utilizadas para comunicação de fora para dentro do Hexágono, 
- Porta de Saída (Output) a comunicação de dentro para fora do domínio, como banco de dados, retorno de APIs e etc.

É importante ressaltar que as Portas pertencem a lógica de negócio, ou seja, as portas são independentes de tecnologia. Enquanto os Adaptadores pertencem a parte externa da camada, normalmente utilizando alguma tecnologia, seja de comunicação (como API Rest), banco de dados (como SQL Server) ou interação de usuários.


![Adaptadores e Portas](/images/hexagonal-adapters.svg)

Os adaptadores podem receber requisições de métodos tanto fora do sistema quanto vindas de dentro do sistema, é possível que o mesmo adaptador que envio uma requisição para o domínio também receba um retorno do mesmo domínio dessa forma podendo exibir uma mensagem de retorno HTTP por exemplo.

Devido ao foco dessa arquitetura estar em portas e adaptadores para acessar o domínio houve uma tentativa de renomeação para Arquitetura baseada em Portas e Adaptadores.

![Arquitetura Completa](/images/hexagonal-complete.svg)

A vantagem principal está que arquitetura hexagonal consegue manter a integridade da aplicação construindo um projeto com **independência de tecnologias**, favorecendo a **reusabilidade de código**, baixo acoplamento, **alta coesão e fácil de ser testado**.



