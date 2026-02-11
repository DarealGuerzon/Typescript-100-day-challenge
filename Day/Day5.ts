// Task: Create a user object with name, age, isActive properties and print it.
// Rules: TypeScript only, object literal, correct types, ❌ any
// Done When: Compiles, object prints
interface User {
    name: string;
    age: number;
    work: string;
    isActive: boolean;
}

const newUser: User = {
    name: "Daryl Guerzon",
    age: 22,
    work: "Full Stack Developer",
    isActive: true
}

console.log(`Hello I am ${newUser.name} ${newUser.age} and I work as a ${newUser.work}. I am currently ${newUser.isActive? "active":"inactive"} .`

);