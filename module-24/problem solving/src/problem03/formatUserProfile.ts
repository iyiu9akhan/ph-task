// TODO: define a type or interface for the user
interface User {
  name: string;
  age: number;
  city: string;
}
function formatUserProfile(user: User): string {
  // write your code here
  return `${user.name} is ${user.age} years old and lives in ${user.city}`;
}
console.log(
  formatUserProfile({
    name: "Fahim",
    age: 22,
    city: "Dhaka",
  }),
);
