---
title: 📃 Monitoring Queries in PostgreSQL
date: 2025/10/19
description: Learn how to identify, monitor, and manage running queries in PostgreSQL. Essential techniques for maintaining the health of your database.
tag: databases, postgresql, monitoring
---

Have you ever found yourself in a situation where the database is slow and you need to figure out which query is causing the problem? Or needed to cancel a query that got stuck and is consuming server resources?

If you work with PostgreSQL, knowing the query monitoring tools is essential. In this article, I'll share some techniques I use daily to identify and manage running queries.

## The pg_stat_activity view

PostgreSQL has a view called `pg_stat_activity` that is a real lifesaver for anyone who needs to monitor what's happening in the database. It provides information about all active connections and the queries being executed.

### Viewing all running queries

To see all queries currently running, you can use:

```sql
SELECT pid, usename, query_start, state, query 
FROM pg_stat_activity 
WHERE state = 'active' 
  AND pid <> pg_backend_pid();
```

The `pid <> pg_backend_pid()` filter is used to exclude the query we're executing from the results.

### Identifying slow queries

One of the most common situations is needing to find that query that's taking longer than it should. For this, we can sort by execution time:

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

### Filtering queries by execution time

If you want to see only queries that have been running for more than a minute (usually a warning sign), use:

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

## Managing problematic queries

Found the problematic query? Now you have two options to deal with it:

### Cancel a query

The most "gentle" way to interrupt a query is using `pg_cancel_backend`:

```sql
SELECT pg_cancel_backend(12345);
```

Replace `12345` with the PID of the query you identified earlier. This function sends a cancellation signal to the query, allowing it to finish in a controlled manner.

### Forcefully terminate a connection

If cancellation doesn't work (sometimes the query is in a state that doesn't respond to the signal), you can force the connection to terminate:

```sql
SELECT pg_terminate_backend(12345);
```

⚠️ **Warning:** Use this option carefully, as it terminates the entire connection, not just the query. Any ongoing transaction will be rolled back.

## Bonus tip: Identifying queries by comment

A practice I adopted in projects is adding identifier comments in the application's queries. This greatly helps when tracing which part of the system is generating a particular query:

```sql
SELECT pid, usename, query_start, state, query 
FROM pg_stat_activity 
WHERE query ILIKE '%/* OrdersModule */%' 
  AND state = 'active';
```

This way, you can quickly filter all queries from a specific module.

## Final thoughts

Monitoring queries is fundamental to maintaining the health of your database. These techniques are simple but extremely useful in daily work. Remember that you need appropriate permissions to view other users' queries and to cancel them.

I hope these tips are useful to you! If you have any questions or want to share other techniques, feel free to get in touch.
