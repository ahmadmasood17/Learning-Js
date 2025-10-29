// const date = new Date();

// console.log(date.toLocaleString()); // date methods

let newDate = new Date(2025, 10, 17);
// console.log(newDate.getTime());

// console.log(newDate.toDateString()); // single date

let poll = Date.now();
// console.log(poll); // miliseconds me 1970 se

// console.log(Math.floor(poll / 1000));

const newdate = new Date();

console.log(
  newdate.toLocaleString("default", {
    year: "2-digit",
  })
);

console.log(typeof newDate);
