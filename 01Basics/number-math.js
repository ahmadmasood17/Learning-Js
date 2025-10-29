const number = 100.543668; // idr kuch b hoskta hai
const numberObj = new Number(123); // ye number hi hai ye Number() object hamy btata hai

// console.log(number);
// console.log(number.toFixed(2)); // akhir me khud hi (point . k bad zero batana k kitny lagaen)
// console.log(numberObj);
// console.log(numberObj.toString().length); // string bnany se string k sary methods b allow ho gy

// console.log(number.toPrecision(6)); // value jiti b hai usky digit count kr k jity valye dogy utny hi digit aay gy chay wo . k bad ho

const RandomNumber = 100000000;

// console.log(RandomNumber.toLocaleString('en-PK')); // value 100,000,000  is tarha ho jay gi
// 'en-PK'  apne hisab se county ka b lga skty hai by defuat us ka hota hai

////////////////////// MATHS //////////////////////////////////

let num = 13;

// console.log(Math);
// console.log(Math.abs(-5)); // minus ko khatam kr k positive value deta hai
// console.log(Math.round(3.4)); // if point value less then 5 privous value , if greater than 5 after value
// console.log(Math.ceil(3.4));// if .1 after value
// console.log(Math.floor(3.9)); // if .1 or .9 privous value
// console.log(Math.min(1,3,5));
// console.log(Math.max(1,3,5));

// console.log(Math.random()); // Math.random ki value always come 0 or 1 k center me
// console.log((Math.random()*10) + 1);

const min = 1;
const max = 6;

console.log(Math.floor(Math.random() * (max - min + 1) + min)); // formula randum value single
