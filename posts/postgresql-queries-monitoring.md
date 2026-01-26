---
title: 📃 Monitorando Consultas no PostgreSQL
date: 2025/10/19
description: Aprenda a identificar, monitorar e gerenciar consultas em execução no PostgreSQL. Técnicas essenciais para manter a saúde do seu banco de dados.
tag: banco de dados, postgresql, monitoria
---

Você já se deparou com aquela situação onde o banco de dados está lento e você precisa descobrir qual consulta está causando o problema? Ou então precisou cancelar uma query que travou e está consumindo recursos do servidor? 

Se você trabalha com PostgreSQL, conhecer as ferramentas de monitoramento de consultas é essencial. Neste artigo, vou compartilhar algumas técnicas que uso no dia a dia para identificar e gerenciar consultas em execução.

## A view pg_stat_activity

O PostgreSQL possui uma view chamada `pg_stat_activity` que é uma verdadeira mão na roda para quem precisa monitorar o que está acontecendo no banco. Ela fornece informações sobre todas as conexões ativas e as consultas que estão sendo executadas.

### Visualizando todas as consultas em execução

Para ver todas as queries que estão rodando neste momento, você pode usar:

```sql
SELECT pid, usename, query_start, state, query 
FROM pg_stat_activity 
WHERE state = 'active' 
  AND pid <> pg_backend_pid();
```

O filtro `pid <> pg_backend_pid()` serve para excluir a própria consulta que estamos executando do resultado.

### Identificando consultas lentas

Uma das situações mais comuns é precisar encontrar aquela consulta que está demorando mais do que deveria. Para isso, podemos ordenar pelo tempo de execução:

```sql
SELECT 
    pid, 
    usename, 
    query_start, 
    now() - query_start AS duration, 
    state, 
    query 
FROM pg_stat_activity 
WHERE state = 'active' 
  AND pid <> pg_backend_pid() 
ORDER BY duration DESC;
```

### Filtrando consultas por tempo de execução

Se você quer ver apenas as consultas que estão rodando há mais de um minuto (geralmente um sinal de alerta), use:

```sql
SELECT 
    pid, 
    usename, 
    query_start, 
    now() - query_start AS duration, 
    state, 
    query 
FROM pg_stat_activity 
WHERE state = 'active' 
  AND now() - query_start > interval '1 minute' 
ORDER BY duration DESC;
```

## Gerenciando consultas problemáticas

Encontrou a consulta problemática? Agora você tem duas opções para lidar com ela:

### Cancelar uma consulta

A forma mais "gentil" de interromper uma consulta é usando `pg_cancel_backend`:

```sql
SELECT pg_cancel_backend(12345);
```

Substitua `12345` pelo PID da consulta que você identificou anteriormente. Essa função envia um sinal de cancelamento para a query, permitindo que ela termine de forma controlada.

### Encerrar uma conexão forçadamente

Se o cancelamento não funcionar (às vezes a query está em um estado que não responde ao sinal), você pode forçar o encerramento da conexão:

```sql
SELECT pg_terminate_backend(12345);
```

⚠️ **Atenção:** Use esta opção com cuidado, pois ela encerra a conexão inteira, não apenas a consulta. Qualquer transação em andamento será revertida.

## Dica bônus: Identificando consultas por comentário

Uma prática que adotei em projetos é adicionar comentários identificadores nas queries da aplicação. Isso facilita muito na hora de rastrear qual parte do sistema está gerando determinada consulta:

```sql
SELECT pid, usename, query_start, state, query 
FROM pg_stat_activity 
WHERE query ILIKE '%/* ModuloPedidos */%' 
  AND state = 'active';
```

Dessa forma, você consegue filtrar rapidamente todas as consultas de um módulo específico.

## Considerações finais

Monitorar consultas é fundamental para manter a saúde do seu banco de dados. Essas técnicas são simples, mas extremamente úteis no dia a dia. Lembre-se de que você precisa ter as permissões adequadas para visualizar consultas de outros usuários e para cancelá-las.

Espero que essas dicas sejam úteis para você! Se tiver alguma dúvida ou quiser compartilhar outras técnicas, fique à vontade para entrar em contato.
