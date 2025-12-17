// const numbers = [2, 4, 3, 7, 5, 8, 1];
// const target = 9;
// const result = [];
//
// function findPairs(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === target) {
//                 result.push([arr[i], arr[j]]);
//             }
//         }
//     }
//     return result;
// }
//
// console.log(findPairs(numbers, target));


// let boxes = [
//     [1, 2, 3],  // Первый ящик с шариками
//     [4, 5, 6],  // Второй ящик с шариками
//     [7, 8, 9]   // Третий ящик с шариками
// ];
//
// // Внешний цикл: проходим по каждому ящику
// for (let i = 0; i < boxes.length; i++) {
//     // Внутренний цикл: проходим по каждому шарику в текущем ящике
//     for (let j = 0; j < boxes[i].length; j++) {
//         console.log(boxes[i][j]);
//     }
// }


// for (let i = 1; i <= 2; i++) {
//         console.log(i)
//         for (let j = 1; j <= 2; j++) {
//             console.log(j)
//          }
// }

// const user = {
//     name: "Alex",
//     age: 20,
//     city: "Minsk"
// };
// const {name, city} = user;
//
// console.log(`${name} живет в ${city}`);
//
//
// const products = [
//     {title: "Phone", price: 800},
//     {title: "Laptop", price: 1500}
// ];
//
//
// const [
//     {
//         title: title1,
//         price: price1
//     },
//     {
//         title: title2,
//         price: price2
//     }
// ] = products;
//
// console.log(`${title1} стоит ${price1}, \n${title2} стоит ${price2}, ` )


// const books = [
//     {title: "Harry Potter", author: "J.K. Rowling"},
//     {title: "The Hobbit", author: "J.R.R. Tolkien"},
//     {title: "1984", author: "George Orwell"}
// ];
//
//
// function destructar(array) {
//     array.forEach(obj => {
//         console.log(`${obj.title} - ${obj.author}`);
//     });
//     return 0;
// }
//
// console.log(destructar(books));


// const users = [
//     {
//         name: "Alex",
//         age: 20,
//         address: {city: "Minsk", street: "Lenina"}
//     },
//     {
//         name: "Nina",
//         age: 17,
//         address: {city: "Grodno", street: "Sovetskaya"}
//     },
//     {
//         name: "Max",
//         age: 25,
//         address: {city: "Brest", street: "Pushkina"}
//     }
// ];


// function districkt(arr) {
//     arr.forEach(obj => {
//         console.log(`${obj.name} живет в городе ${obj.address.city} на улице ${obj.address.street}`)
//     })
//
//
// }

const calculator = {
    read() {
        this.a = Number(prompt('Введите первое число:', 0));
        this.b = Number(prompt('Введите второе число:', 0));
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
console.log('calculator', calculator)
console.log(calculator.sum());
console.log(calculator.mul());