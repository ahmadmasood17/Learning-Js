const firstName = "ahmad";
const env = 12;

// console.log(firstName + env * 12);

//  ``  string interpolations

const name = "abc";
const age = 12;

console.log(`My name is ${name} and My age is ${age}`);

const gameName = new String("Hello"); // is me hamy is object k inbuild methods milty hai or isko
// accsess krne number k istemal b kr skty hain [0 or 1] kyu k ye ek obect hai (toString se string bnta hai ) hai string lekin object hai

// console.log(gameName.toUpperCase());
// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.substring(2, 4));
// he substring() method is used to extract such a part of a string.

// console.log(gameName.slice(2, 4));  // value btaty hain k konsi value chahiye

// trim  space khatm krne k liye // WhiteSpace

const webUrl = "http//ahmad/ahmad2333masood"; // replace value 2333 into -

// console.log(webUrl.replace("2333", "-"));
// console.log(webUrl);

// includes ye janne k liye k ye hai k ni agr hai to ture ni ti false

// console.log(webUrl.includes("ali"));

// console.log(webUrl.split("/", [3]));

const a = "name";
const b = new String("name");
console.log(typeof b.toString());

// console.log( a);

let names = new String("Heloo");

console.log(names);
