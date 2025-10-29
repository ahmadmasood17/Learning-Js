// Array i Resize jitne marzi add krskty hain

// Array ko jab b copy bnaen gy to ye shallow copy bnata hai deep copy ni bnata

const arr = ["1", "2", "3"];

const newarr = new Array(1, 2, 3, 4);
newarr.push(5); // Array me value add krne k liye
newarr.pop(); // Array ki last value remove krne k liye
newarr.unshift(0); // Array k first me add krne k liye
newarr.shift(); // Array first value remove krne k liye

console.log(newarr.includes(6)); // Array me question krne k liye k ye vlue hai k ni

const arrjoin = newarr.join(); // type ko string bna deta hai  shallow copy bna k

console.log(typeof newarr);
console.log(newarr);
console.log(arrjoin);

const arslice = [1, 3, 4, 5];

console.log("A", arr);
console.log(arr.slice(1, 3)); // jitni be value likhi hai maslan 1 index se lekr 3 tk value nikaly ga 3 is me shamil ni hoga or orignal array ko b ni chry ga
console.log("B", arr);
console.log(arr.splice(1, 3)); // jitni be vakue likhi hai maslan 1 index se lekr 3 tk value nikaly ga 3 is me shamil hoga or origna array ye value jo splice me likhi hai remove ho jay gi
console.log("C", arr);
