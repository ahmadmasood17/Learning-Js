//kis tarha se data ko memory me rakha jata ha or accsess kiya jaita hai
//in js datatypes ko 2 hisson pr taqseem kiya gya hai premitiv  non primitiv or refrence type

//Primitive Data types
//primitive types call by value hoty hain
//jab b inko copy krty hain to inka orignal data ni diya jata copy kr k diya jata hai
//changes copy pr hoty hain

// 7 types hain

//String
//Number
//Boolean
//Null
//Undefined
//symbol     value ko unique bnany k liye in advance js
//bigint

//Refrence Type  (non primitive)
//memory me refrnce aelocate kiya jaskta hai

//Array
//Object
//Functions

//js staticly type or dynamicly type  ?

//js is dynamicly typed

//staticly type

//A language is statically typed if the type of a variable is known at compile time. For some languages this means that you as the programmer must specify what type each variable is; other languages (e.g.: Java, C, C++) offer

//Dynamically typed languages

//A language is dynamically typed if the type is associated with run-time values, and not named //variables/fields/etc.   (js)

//non primitive ka data type object function e hota hai

const id = Symbol("111");
const ids = Symbol("111");

// console.log(id === ids);

const fun = () => {};

const arr = ["ahmad", "ali"];

const obj = {
  name: "ahmad",
  age: 10,
};

console.log(typeof fun);
