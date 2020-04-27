// const promo = '10%';

// switch (promo) {
//     case '10%':
//         console.log('Dzis jest 10% taniej')
//         break;

//     case '20%':
//         console.log('Dzis jest 20% taniej') 
//         break;

//     case '30%':
//          console.log('Dzis jest 30% taniej')
//         break;        
//     default:
//         console.log('Dziś nie ma zniżek ;(')
//         break;
// }



//first method
// const x = 10;
// console.log( (x%2 === 0) ? 'Jest podzielne' : 'Nie jest podzielne');

//second method
// const x = 10;
// const check = (x%2 === 0) ? 'Jest podzielne' : 'Nie jest podzielne';

// console.log(check);

// let x = 50;
// let $huge; 

// if ( x >= 100){

//    $huge = ('X jest wiekszy');

// } else if ( x < 100 && x > 30){

//    $huge = ('x jest średni');

// }else {
//    $huge = ('x jest mały');

// }

// console.log($huge.toUpperCase());

//ĆWICZENIA PĘTLA FOR + TABLICE

// const cars = ['tesla', 'mercedes', 'mazda', 'jaguar', 'vg'];

// for (let i = 0; i < cars.length; i++) {
//    console.log(cars[i]);

// }


// const $countries = ['france', 'poland', 'netherlands', 'deutchlands', 'italy'];

// for ( let i = 0; i <$countries.length; i++){
//    console.log($countries[i]);
// }


// const $capitals = ['paris', 'warsow', 'amsterdam', 'berlin', 'rome'];

// for (let i = 0; i <$capitals.length; i++){
//    console.log($capitals[i]);
// }

// ĆWICZENIA PĘTLA WHILE

// let i = 0;

// while (i < 5) {
//    console.log(`Liczba wynosi: ${i}`);
//    i++ ;

// };

//ĆWICZENIA PĘTLA DO WHILE

// let i = 0;

// do {
//    console.log(`Przed inkrementacją ${i}`);
//    i++;

//    console.log(`Po inkrementacją ${i}`);
// } while (i < 2);


// PĘTLA FOR OFF

// const numbers = [2, 3, 10, 25, 55];

// for (const number of numbers) {

//    console.log(number * 3 );

// }


// PĘTLA FOREACH

// const numbers = [1, 3, 4, 5, 63 ];

// const newNumbers = numbers.forEach( el => console.log(el * 2));


// const citys = ['london', 'moscow', 'denver', 'rio'];

// for( let i = 0; i < citys.length; i++  ){

//    console.log(`Jedziemy do ${citys[i]}`);

// }


// let x = 0;

// while ( x <= 10) {

//    console.log(`X jest równy ${[x]}`);
//    x = x +2;

// }
// let x = 20;

// do{
//    x = x - 3;
// }while (x > 0 ) 
//    console.log(`X wynosi ${[x]}`);

// const numbers = [5,8,10,23,44];

// for(const number of numbers){
//    if ( number % 2 === 0 ){
//       console.log(`${number}  jest podzielna przez 2`)
//    } else {
//       console.log(`${number}  nie jest podzielna przez 2`)
//    }   
// } 

//TABLICE 

// const numbers = [1, 2, 3, 4, 5,];
// console.log(numbers);
// numbers.unshift(-1,0) // add the ele to begin 
// console.log(numbers);
// //
// const deleted = numbers.shift();
// console.log(deleted); // deleted sth to begin
// console.log(numbers);
// //
// const colors = ['red', 'pink', 'blue'];
// console.log(colors);
// colors.push('black');// add sth to end tab.
// console.log(colors);
// const deleted2 = colors.pop();//deleted sth from end tab.
// FUNCTION WITH TABLE MAP

// const colors = ['blue', 'red', 'white'];

// function upperCase(color) {

//     console.log(color.toUpperCase());

// };

// colors.map(upperCase);

// const nums = [1,2,3,];
// const letter = ['a', 'b', 'c'];

// const newArray = nums.concat(letter);
// console.log(newArray);

// const newArray2 = nums.concat(1,2,3);
// console.log(newArray2);

// const num = [1, 2, 3,];
// console.log(...num);

// const mainDish = ['garlic bacon', 'hot chicken', 'spicy beef'];
// const drinks = ['beer', 'lemon tea', 'water for the poor'];

// const menu = [...mainDish,...drinks];
// console.log(menu);

// Slice and Splice 

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const nums2 = nums.slice(2, 5);
console.log(nums2);

const adres = [23, - 32, 231, 34 ,-234];
const correctAdres = adres.splice(2,5, 213,2335,2323);
console.log(correctAdres);
console.log(adres);
































































































































































































































