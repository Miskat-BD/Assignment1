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
constructor(private name : string){}<br> 
}<br> 

const user = new User("Miskat")<br>
console.log(user.name);<br>  ->Error

3. Protected: This is access in it's own class and it's extended child class.It's can't access in other class .
<br>
Example of Protected:<br>
class Person {<br>
    constructor(protected name: string){}<br>
}<br>
class Student extends Person{<br>
    getName (){<br>
        return this.name<br>
    }<br>
}<br>
const student = new Student("Khaled")<br>
console.log(student.getName());

4. Readonly: This is only readable and it doesn't changable.

<br>
Example of Public:<br>

class User { <br>
constructor(readonly name : string){}<br> 
}<br> 

const user = new User("Miskat")<br>
user.name -> not changable <br>
console.log(user.name);<br> -> only read




