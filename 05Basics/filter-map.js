const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];


// const a = num.filter((n)=> n > 5 ) agr goll brackets hain to return likhne ki zarorat ni
const a = num.filter((n) => {
    return n > 5   //agr {}  hain to retun ke bager value rerun ni hogi
})

// console.log(a);
const nums = [1, 2, 3,];

const d = nums.map((i) => i + 10)

// console.log(d);


const nm = [1, 2, 4]


const init = 0

const myNums = nm.reduce((acc, current) => {
    console.log(`acc:${acc} curval:${current} `);

    return acc + current

}, init)

console.log(myNums);




const shopping = [
    {
        name: "english",
        price: 1000,
    },
    {
        name: "math",
        price: 200,
    },
    {
        name: "urdu",
        price: 900,
    },
    {
        name: "Bio",
        price: 110,
    }
]


const cart = shopping.reduce((acc, item) => acc + (item.price), 0)

console.log(cart);



