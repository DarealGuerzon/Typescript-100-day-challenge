// Build a Mini User Registry — Combine everything from Days 1-7 into one file:

// Create an interface for a User with readonly id, name, age, and isActive
// Write a createUser(name, age) function that auto-generates an id (just use a counter) and sets isActive to true
// Create 3 different users using your function
// Store them in an array (User[])
// Loop through the array and print a summary for each user

interface User {
    readonly id: number;
    name: string;
    age: number;
    isActive: boolean;
}
let userIdCounter = 1;

function createUser(name: string, age: number){
    const user: User = {
        id: userIdCounter,
        name:name,
        age:age,
        isActive: true
    };
    userIdCounter++;
    return user;
}

const user1 = createUser("Cassie",1);
const user2 = createUser("Potchi",2);
const user3 = createUser("Lexie",3);
const user4 = createUser("Bambi",1);

const users: User[] = [user1,user2,user3,user4];

for (const user of users) {
    console.log(`User ${user.id}: ${user.name}, Age: ${user.age}, Active: ${user.isActive}`);
}

//interface = validator or safety net, will throw an error if input is incorrect
//const inside a function lets it add logic instead of returning it
