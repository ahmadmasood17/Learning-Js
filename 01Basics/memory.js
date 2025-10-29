// 2 types of memory

// Stack Memory (primitive type me stack use hoti hai ) (copy ban k use hota )
// Heap Memory (refrence (non primitive) type me heap memory use hoti hai  ) (orignal hi)

// value copy bn rhi hai name ki orignal value change ni hogi (primitive)

const name = "ahmad";

let nameTwo = name;
nameTwo = "ali";

console.log(nameTwo);
console.log(name);

////////////////////////////

// orignal valye change hojay gi kyuke refrence(non-primitive) type hai

let obj = {
  name: "nadir",
  city: "lahore",
};

let objtwo = obj;
objtwo.name = "Ahmad";

console.log(obj);
console.log(objtwo);
