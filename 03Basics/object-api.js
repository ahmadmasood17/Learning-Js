// Desutrucering


const course = { coursename: "js", price: "90" }
 

const { coursename : cn, price: p } = course;  // de-sutructure   objet me 

console.log(cn, p);
 

//Api concept


//   backend se data {} is form me ata hai isko JSON kehte hai same object {} lekin is json ka koi nam ni hota hai or iski keys " " string hoti hai example


// {
//     name: "abc",  //   not valid in json
//     version: "2",
// }

    
// {
//     "name": "abc",   //valid
//     "version": "3",
// }