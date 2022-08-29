# SOLID Principle

These principles establish practices that lend to developing software with considerations for maintaining and extending as the project grows. Adopting these practices can also contribute to avoiding code smells and refactoring code for software development.

SOLID stands for:
S - Single-responsiblity Principle
O - Open-closed Principle
L - Liskov Substitution Principle
I - Interface Segregation Principle
D - Dependency Inversion Principle

SPR:
- A class should have one and only one reason to change, meaning that a class should have only one job.
- Otherwise, the class would become GOD object which have multiple responsibles.
- Example will be persistence(repository layer), business logic(service layer)

OCP:
- Classes should be open for extension but closed for modification
- If could follow it strongly enough, it's possible to modify the behavior of the code without ever touching a piece of original code

LSP:
- Able to subsitute a base type for a subtype
- Without compromising the outcome
- If it looks like a duck, quacks like a duck. But if needs batteries - You prabably have the wrong abstraction.

ISP:
- A client should never be forced to implement an interface that it doesn’t use any of the methods.
- Don't put too much into an interface; split into separate interfaces
- YAGNI

DIP:
- High-level modules should not depend upon low-level ones; use abstractions 
