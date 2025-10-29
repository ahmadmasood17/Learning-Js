const tinder = new Object(); //singleton object
const tinderObj = {}; // non singletonobject

(tinderObj.id = "1"), (tinderObj.name = "Ahmad"), console.log(typeof tinder);

console.log(tinderObj);

const obj1 = { 1: "1", 2: "1", 3: "1", 4: "1" };
const obj2 = { 5: "1", 6: "1", 7: "1", 8: "1" };

const obj3 = Object.assign({}, obj1, obj2); // object ko merger krn k liye   first pram trget baqi source

const obj4 = { ...obj1, ...obj2 }; // same result latest yahi hai

// console.log(obj4);

//database value

const users = [
  {
    id: 1,
    email: "some@gmail.com",
    role: "superadmin",
  },
  {
    id: 2,
    email: "som@gmail.com",
    role: "user",
  },
  {
    id: 3,
    email: "some@gmail.com",
    role: "user",
  },
  {
    id: 4,
    email: "some@gmail.com",
    role: "Adminester",
  },
  {
    id: 5,
    email: "some@gmail.com",
    role: "user",
  },
];

// console.log(users[2].id);

console.log(obj1);
console.log(Object.keys(obj1)); //accsess all key key array me aay gi to isko accsess array [] se hi kren gy ya map
console.log(Object.values(obj1));
console.log(Object.entries(obj1));

console.log(obj1.hasOwnProperty("3")); // question krne k liye k ye property hai k ni
