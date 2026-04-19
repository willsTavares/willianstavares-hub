---
title: 📃 Hexagonal Architecture
date: 2023/8/18
description: Discover how Hexagonal Architecture transforms software design, bringing practical benefits to your project. Explore its effectiveness and application in this in-depth study.
tag: software architecture
---
# Hexagonal Architecture

Hexagonal Architecture consists of dividing a system's classes into layers, where business rules and entities reside in the main layer — the Domain. This way, it's possible to ensure the application's integrity, reuse business rules across multiple platforms such as web and mobile, and easily replace external technologies like databases due to the lack of framework dependencies.

![Hexagonal Architecture](/images/hexagonal.svg)

## Adapters and Ports

With the Domain layer being the main layer of the architecture, it's important that it remains isolated and is accessed in a restricted way by external tools. Therefore, communication between other layers and the Domain layer occurs through Adapters.

![Adapters](/images/hexagonal-adapters1.svg)

Adapters work by communicating with ports, enabling internal and external communication within the application. A port (interface) is a specification of how the domain can be used, meaning for input or output of the application:

- Input Ports are interfaces used for communication from outside to inside the Hexagon.
- Output Ports handle communication from inside to outside the domain, such as databases, API responses, etc.

It's important to note that Ports belong to the business logic — they are technology-independent. Adapters, on the other hand, belong to the external part of the layer and typically use some technology, whether for communication (like REST APIs), databases (like SQL Server), or user interactions.

![Adapters and Ports](/images/hexagonal-adapters.svg)

Adapters can receive method requests both from outside the system and from within the system. It's possible for the same adapter that sends a request to the domain to also receive a response from that domain, thus being able to display an HTTP response message, for example.

Due to this architecture's focus on ports and adapters for accessing the domain, there was an attempt to rename it to Ports and Adapters Architecture.

![Complete Architecture](/images/hexagonal-complete.svg)

The main advantage is that hexagonal architecture manages to maintain the application's integrity by building a project with **technology independence**, favoring **code reusability**, low coupling, **high cohesion, and easy testability**.
