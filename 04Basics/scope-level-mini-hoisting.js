// nested scops

import { isStringObject } from "util/types";

function first() {
  const name = "ahmad";

  function second() {
    const nametwo = "ali";
    // console.log(name);
    // console.log(nametwo);
  }
  second();
}
first();

// console.log(one());
function one() {
  return "heelo";
}

var two = function () {
  return "teelo";
};
// console.log(two());



const abg = {name: "ahmad"};


  
if (true) {
     console.log(String(abg));
     console.log(typeof abg);     
}

const arr = [1, 2, 3];

arr.toString(); // "1,2,3"
 Object.prototype.toString.call(arr); // "[object Array]"


