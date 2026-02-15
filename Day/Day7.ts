// Task: Write a function createUser(name, age) that returns a user object with isActive true.
// Rules: TypeScript only, strict types, ❌ any
// Done When: Function returns correct object and compiles
function createUser(name: string, age: number){
    return{
        name: name,
        age: age,
        isActive:true
    };
}
const user = createUser("Daryl",22);
console.log(user);

//function makes it dynamic, basically blueprint or acceptable parameters that is reusable
//const is for making the variable fixed / set
