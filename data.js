
let faker = require('faker');
let data = [];
let categories = ['Vegetables', 'Fruits', 'Spices'];
faker.seed(100);
for (let i = 1; i < 503; i++){
    let category = faker.helpers.randomize(categories);
    data.push({
        id: 1,
        name: faker.commerce.productName(),
        category: category,
        description: `${category} : ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price())
    })
    //https://github.com/Marak/Faker.js
}
module.exports = function(){
    return {
        categories: ["Vegetables", "Fruits", "Spices"],
        products: data,
        orders: []
    }
}