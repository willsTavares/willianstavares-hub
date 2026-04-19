---
title: 📃 What is S.O.L.I.D?
date: 2022/6/14
description: This article explores in an accessible way the fundamentals of this approach to software design. Learn and apply these principles for more robust and flexible code.
tag: software architecture, development patterns
---

# S.O.L.I.D
<hr>

**SOLID** is an acronym created by Michael Feathers for the five principles he deemed the most widely used in Object-Oriented Programming and code design. These principles were initially addressed by Robert C. Martin — the famous Uncle Bob — in his article "The Principles of Object-Oriented Design."

Each principle brings an approach and way of developing cleaner and more cohesive code, and can be used and applied in any object-oriented programming language. In the topics below, each principle and its function will be exemplified.


**S** – Single Responsibility Principle
**O** – Open-Closed Principle
**L** – Liskov Substitution Principle
**I** – Interface Segregation Principle
**D** – Dependency Inversion Principle



## Single Responsibility Principle (SRP)
<hr>


**Single Responsibility Principle** — A class should have one, and only one, reason to change.

The single responsibility principle makes it clear that a class should be specialized in only one task — that is, only one responsibility within the system. This way, the class will only have one reason for any changes to be made.

The term used for classes with many responsibilities is God Class, and it should be avoided due to difficult maintenance, the dangers of modifications potentially compromising other tasks executed by the same class, and the complexity of code reuse.

When creating classes for the system, we ideally imagine what possibilities and functions they could perform. In erroneous cases, this class will have various responsibilities to worry about.

Let's say there's a class that represents a rectangle, with properties of its area. The rectangle will worry about maintaining its area, but also about drawing it, as in the image below:


![image.png](/.attachments/image-e6716a03-677e-4d30-be79-015bc6b492a9.png)

If one day we need to change the way we draw the rectangle's area, we'll need to modify the class. Any new change will require handling and modifying the Rectangle class, and consequently all other modules that use it will need to be reviewed and tested.

Following the SRP principle, the Rectangle class should only worry about its area. Therefore, the drawing function should be externalized to another class, as in the image below:


![image.png](/.attachments/image-0905a6b9-e77e-4005-929c-7d943ff721ff.png)


With this, the use of the Rectangle class is freed from modifications, only generating changes in the single, and only one, functionality.

Possible problems from violating the SRP principle:

- Lack of cohesion;
- High coupling;
- Difficulties with automated testing;
- Code reuse issues.


## Open-Closed Principle (OCP)
<hr>

**Open-Closed Principle** — Objects or entities should be open for extension, but closed for modification.

The Open-Closed principle states that you should be able to extend an object or entity, but they should be closed for modifications. In other words, for adding new functionalities or system behaviors, the entity should be extended rather than directly altered.

The idea of **separating extensible behavior behind an interface and inverting dependencies** was conceived by Uncle Bob, with the intention of concentrating everything that could possibly be modified and has a tendency to grow into interfaces, thus making it possible to invert the dependency in the code.

Imagine there's a Payroll class that handles closing, receiving employees for payment calculation. For the logic to work, it must validate the contract type and execute the method that calculates the amount to be paid. As in the image below:

![image.png](/.attachments/image-ba243273-3744-4c58-917f-62e2e37cc129.png)

Following this approach, when the company needs to add a new type of contract, for example a contractor, the Payroll class will need to be modified for a new validation and search for the correct method with the value summation. This approach violates OCP, as the class is open for modifications.

One of the best scenarios to mitigate this problem is creating an interface for compensation, where there will be only one method that will be called and implemented by the contract classes. As in the example below:

![image.png](/.attachments/image-dc4185fd-3569-418b-b398-501f47752eb4.png)


## Liskov Substitution Principle (LSP)
<hr>

The Liskov Substitution Principle states that a derived class can be substituted by its base class without affecting the correct execution of the program.
With this principle, we can apply Polymorphism to always use derived classes while making the proper reference to the base class, ensuring the system's solidity.


## Interface Segregation Principle (ISP)
<hr>

The Interface Segregation Principle states that a class should not have methods and interfaces that won't be used — that is, it's better to have more specific interfaces for their functionality than generic interfaces. This way, the class is not forced to implement methods that won't be used by it.

## Dependency Inversion Principle (DIP)
<hr>

The Dependency Inversion Principle states that we should depend more on abstractions than implementations. This way, we minimize coupling as much as possible, being able to reuse code in other systems without the need to bring dependencies along with the class. The correct way is to use Dependency Injection via method.


In conclusion, the S.O.L.I.D principles offer a robust, object-oriented approach to software development, promoting the creation of flexible, scalable, and easily maintainable code. By adhering to these principles — Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion — developers can create systems that are more resilient to change, less prone to errors, and easier to understand and expand.
