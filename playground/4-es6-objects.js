// Object property shorthand

const name = "Daniel";
const userage = 28;

const user = {
    name,
    age: userage,
    location: "Budapest"
}

console.log(user);

// Object destructuring

const product = {
    label: "red notebook",
    price: "3$",
    stock: "201",
    salePrice: undefined,
}

/* const {price, label:productLabel, rating = 5} = product;
console.log(productLabel, price, rating); */

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction("order", product);