## Explain how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples.

## Answer:

In Typescript, we used modifier(public, private, protected and readonly) that how property and method access. They help protect data and maintain proper security in OOP(Object Oriented Programmimg).

1. Public : This can access anywhere. It is default modifier
<br>
Example of Public:<br>

class User { <br>
constructor(public name : string){}<br> 
}<br> 

const user = new User("Miskat")<br>
console.log(user.name);<br>

2. Private: This can access only it's own class. It can't access in child or other classes.
<br>
Example of Private:<br>

class User { <br>
constructor(public name : string){}<br> 
}<br> 

const user = new User("Miskat")<br>
console.log(user.name);<br>  //Error

