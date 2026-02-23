// Day 8 — Function Parameters Typing
// Task: Add type annotations to createUser parameters.
// Rules: TypeScript only, ❌ any, ❌ implicit any
// Done When: Compiles, function types enforced
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function createUser(
    id:number,
    name: string,
    email: string,
    isActive: boolean
): User {
    return{
        id,
        name,
        email,
        isActive,
    };
}

console.log(createUser(1, "Alice", "alice@example.com", true));
