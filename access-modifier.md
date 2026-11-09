## Explain how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples.

## Answer:

In Typescript, we used modifier(public, private, protected and readonly) that how property and method access. They help protect data and maintain proper security in OOP(Object Oriented Programmimg).

Public : This can access anywhere. It is default modifier
Example of Public:

class User { <br>
constructor(public name : string){}<br> 
}<br> 

const user = new User("Miskat")<br>
console.log(user.name);<br>
