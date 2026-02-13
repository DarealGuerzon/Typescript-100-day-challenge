// Task: Make the user.name property readonly and try to change it (observe error).
// Rules: TypeScript only, readonly, ❌ any, ❌ libraries
// Done When: Compiler shows error when changing name
type User = {
    readonly name: string;
    age: number;
};

const user: User ={
    name: "Daryl",
    age: 22,
};

user.name = "Marga";

console.log(user.name);
console.log(user.age);