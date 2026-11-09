## What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

## Answer: 
In Typescript, we used Interface and Type Alias for define structure of a data.

Interface usually used for create objects structure. Interface is allows redeclared that called declaration merging.
Types is usually used object, string, number, union , tuple etc. Types is not allow redeclared. Beacuse declaration merging is not support in types alias.

## Example :
interface User { <br>
    id: number, <br>
    name: string,<br>
    isActive: boolean<br>
}

type Value = string | number | boolean <br>
let value:Value = "M" <br>
value = 12