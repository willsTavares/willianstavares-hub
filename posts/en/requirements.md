---
title: About Requirements Gathering
date: 2022/3/18
description: In this article I'll share some tips and methods for gathering the necessary requirements for system development. This document will accompany all adjacent stages of development, so it's crucial to understand the user's needs.
tag: development patterns
---

Requirements gathering serves to identify the needs and possible problems of users — therefore, every business rule can also be called a requirement.

This stage is essential for mapping the user's reality, so the **clarity** and **objectivity** of each requirement is extremely important. Keep in mind that once the requirements are gathered, all subsequent stages of the system development process will be based on this document.

Requirements can be classified in two ways:

**Functional Requirements:** address the system's behavior the way the user desires, describing how the application should behave in certain situations.

For example:
* "The system must have a search input"
* "The app must have a registration form"
* "The user should be able to change registration information"

**Non-Functional Requirements:** describe how the application will be developed — the resources needed to put functional requirements into practice, being linked to application characteristics or constraints.

For example:
   - "The app will use an Azure SQL Database for storing user data"
   - "The registration form will be built with HTML and JavaScript"

It's essential in this first part that some interviews are conducted with the client for a general understanding of the project, understanding of the user's current scenario, the client's main expectations, all possible project constraints, and what is truly necessary for the application.

**Keep in mind that a single meeting may not be enough to gather all the necessary requirements for the system.**

Some tips on how to proceed during interviews so that requirements can emerge coherently:

* Always keep an open mind;
* Let the user have space to bring their vision of the project;
* Be prepared for changes during this gathering phase;
* Bring your questions or prepare an interview script;
* Take note of as much information as possible;

Documentation
---------------------
---

Separate the requirements into two tables: one for functional requirements (FR) and another for non-functional requirements (NFR).

It's important to note that each requirement must be validated by meeting certain criteria:

* Be necessary for the application;
* Be clear, leaving no room for double interpretation;
* Be achievable — the development team must be capable of executing it;
* Have connections with other requirements;

Below is an example of how to organize functional and non-functional requirements for a simple login and registration screen:

**Functional Requirements**

* FR01: The app must allow the user to access the application with Username and Password.
* FR02: The app must allow the user to register in the application with the following fields on the registration screen:
        Email;
        Username;
        National ID;
        Password;
        Password confirmation;
* FR03: The app must allow the user to change their registration information, created in FR02, except for the National ID field.

**Non-Functional Requirements**

* NFR01: User data must be stored in a SQL database.

After writing the requirements, there are several ways to group them according to their importance to the system.

One of these ways is to separate requirements by Criteria — requirements can be classified in three ways:

**Essential Requirements:** Extremely important for the system, directly related to the user's needs or problems. If not implemented, the application cannot be completed.

**Important Requirements:** Although not the most critical and doesn't prevent the application from going to production, if not implemented it will cause losses to the business.

**Desirable Requirements:** Won't cause any loss to the business, but it's something the client would like to have implemented, so attention should be given as well.

Another way to group requirements is by priority, defining high, medium, or low priority for each requirement with the following question: "What is considered most important for the user in the system?"

Validation
---------------------
---
User validation is the last part of requirements gathering — this is where the user reviews all documented requirements, and each requirement is clarified and verified. This verification is useful for validating whether the requirements are truly necessary, whether there are any conflicts between them, whether they meet all constraints, and whether they can actually be implemented by the team.

Be aware that at this stage, some requirements may be changed or new requirements may also arise during the discussion with the user.

Finally, after all corrections if necessary, the client's approval that the gathered requirements truly meet their needs and expectations.

After the documentation is finalized and approved, we can move on to a Prototype following all our gathered requirements. But that's a topic for another article. 😁

Thank you for reading this far!
