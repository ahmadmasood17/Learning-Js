// Object Diclaration in two ways
// ilitral use krme me singleton ni banta hai {}
// constructor  me singleton banta hai   Object.create()

const sym = Symbol("key1");

const obj = {
  name: "ali", // name jo key hai ye string ke tarha treet hoti hai
  age: 4,
  "full name": "karachi",
  [sym]: "mykey2", // symbol ko object me is tarha use krty hain
};

console.log(obj.age);
console.log(obj["age"]); // ide string kr k hi accsess hogi
console.log(obj["full name"]);

console.log(obj.name);
obj.name = "ahmad";
console.log(obj.name);

console.log(typeof obj[sym]);

// agr ap chate hain k koi iski value ko change na kr pay to usko freeze krdo

Object.freeze(obj);
obj.name = "anwar";
