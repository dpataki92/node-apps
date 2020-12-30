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

// add default params to avoid error when object is undefined
const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction("order", product);