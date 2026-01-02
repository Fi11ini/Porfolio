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

// const books = [
//     {
//         book_title: "Война и мир",
//         book_author: "Лев Толстой",
//         book_year: 1869,
//     },
//     {
//         book_title: "1984",
//         book_author: "Джордж Оруэлл",
//         book_year: 1949,
//     },
//     {
//         book_title: "Мастер и Маргарита",
//         book_author: "Михаил Булгаков",
//         book_year: 1967,
//     },
// ];


// function booksChangeName(arrayOfBooks) {
//     const redacterName = arrayOfBooks.map((objectBook) => {
//         const newObj = {};
//
//         Object.entries(objectBook)
//             .forEach(([key, value]) => {
//
//                 newObj[key === "book_title" ? "TITLE": key] = value;
//                 // newObj[key === "book_title" ? "title" : key] = value;
//             });
//         return newObj;
//     });
//
//     return redacterName;
//
// }
// console.log(booksChangeName(books));

// function booksRenamer(array) {
//     const redacteredName = array.map((objetOfBooks) => {
//         console.log(objetOfBooks);
//         const newObj = {};
//
//         Object.entries(objetOfBooks)
//             .forEach(([key, value]) => {
//                 newObj[key === 'book_title' ? 'TITLE' : key] = value;
//                 // newObj[key === 'book_year' ? 'YEAR' : key] = value
//             });
//         return newObj;
//
//
//     });
//
//     return redacteredName
// }
//
//
// console.log(booksRenamer(books));


// const arrayTest = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//
// function openOrSenior(data) {
//     return data.map(([age, handicap]) => {
//         if (age >= 55 && handicap > 7) {
//             return "Senior";
//         } else {
//             return "Open";
//         }
//     });
// }


// for (let i = 0; i < data.length ; i++) {
//     if(data[i][0] < 55 && data[i][1] > 7) {
//         filteredArray.push(data[i])
//     }
// }
// return filteredArray

// const array = [5, 10, 14];
// function gimme(triplet) {
//     const min = triplet.reduce((acc, val) => Math.min(acc, val));
//     const max = triplet.reduce((acc, val) => Math.max(acc, val));
//     for (let i = 0; i <triplet.length ; i++) {
//         if(triplet[i] != min && triplet[i] != max ) {
//             return triplet.indexOf(triplet[i])
//         }
//     }
// }
//
// console.log(gimme(array));


// const arrayOfInterval = [
//     [1, 5], [6, 10], [11, 13]];
//
//
// function sumOfIntervalSizes(intervals) {
//     let sum = 0;
//
//     for (const [first, second] of intervals) {
//         console.log(first)
//         sum += second - first
//     }
//     return sum
// }
//
//
// console.log(sumOfIntervalSizes(arrayOfInterval));




// const arrayOfPeople = ['Vadim', 'Alex', 'Andrey', 'Anton'];
//
// function likes(names) {
//     if (names.length === 0) {
//         return "no one likes this";
//     } else if (names.length === 1) {
//         return names[0] + " likes this";
//     } else if (names.length === 2) {
//         return names[0] + " and " + names[1] + " like this";
//     } else if (names.length === 3) {
//         return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//     } else {
//         return names.slice(0, 2).join(", ") + " and " + (names.length - 2) + " others like this";
//     }
// }
//
//
// console.log(likes(arrayOfPeople));



