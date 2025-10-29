function hello() {
  console.log("1");
  console.log("2");
  console.log("3");
  console.log("4");
  console.log("5");
  console.log("6");
  console.log("7");
}

// hello(); // by refrence call horha (exicute horha hai)

function Sum(num1, num2) {
  return num1 + num2; //agr return na kren to function ko kesi var me store kren gy to value undifine aay gi

  //  console.log("ye log show ni hhoga kyu k pehle return ho gya hai or return k bad koi value ni uthti");
}

const result = Sum(3, 7);

// console.log(result);

function login(username = "ali") {
  // defualt value k liye
  if (!username) {
    console.log("please send user");
    return;
  }
  return `${username} just login`;
}

const hh = login();
// console.log(hh);

// const objfun = {    ///  simple objct calling function
//   name: "roshan",
//   prices: 10,
// }


function cart(random) {
  return `name is ${random.name} & price is ${random.price}`;
}

// console.log(cart(objfun));


console.log(
  cart({
    name: "roshan",
    price: 10,
  })     // same array or object me dono tareqon se pass k skty hain
);


