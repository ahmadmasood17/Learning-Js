const marvel_heros = ["thor", "ironman", "blackpanthar"];
const dc_heros = ["superman", "flash", "batman"];

// marvel_heros.push(dc_heros); // ye ek hi element samj k mergae kr rha hai last pr
// marvel_heros.concat(dc_heros); //

const allheros = marvel_heros.concat(dc_heros); // ye dono ko merge kr rhhai or alg var craete kr k

// Spread Opreater -> example -> glass break

const spread_heros = [...marvel_heros, ...dc_heros]; //iska b same kam hai concat jesa mgr ye populr hai

// console.log(allheros);
// console.log(marvel_heros);
// console.log(spread_heros);

const anotherArray = [1, 2, 3, 4, [1, 4, 4], 5, [7, [6]]];

const real_anotherarray = anotherArray.flat(Infinity); // ek hi aary bnany ke liye flat(isky ande value jitny array hai 1,3)

// console.log(real_anotherarray);

console.log(Array.isArray(anotherArray)); // is Array question krne k liye hai ke ye array hai k ni
console.log(Array.from("1")); // ye from array bnany k liye string ko shaloow copy || of b use hota hai  creates a new array instance from a variable number of arguments,
console.log(Array.from({ name: "ahmad" })); // []  array de ga intresting
