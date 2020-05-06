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
// // console.log(menu);

// // Slice and Splice 

// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const nums2 = nums.slice(2, 5);
// console.log(nums2);

// const adres = [23, - 32, 231, 34 ,-234];
// const correctAdres = adres.splice(2,5, 213,2335,2323);
// console.log(correctAdres);
// console.log(adres);

// const numbers = [1, 3, 4, 6, 7];

// function number(x) {
//     return x % 2 === 0;
// };

// console.log(numbers.filter(number));

// const newNumbers = numbers.forEach(x => console.log(x * 2))

// const names = ['klaudia', 'ania', 'asia'];

// console.log(names.sort());
// console.log(numbers.reverse());

// const numbers = [1, 2, 4, 6, 8];
// const newNumbers = numbers;

// numbers.unshift(323);
// console.log(numbers);

// newNumbers.pop(numbers);
// console.log(numbers);

// const sth = [];

// sth.push(1,2,3,4,6);
// console.log(sth);


// const sth = [1, 4, 6];
// const fruits = [553, 344, 226];

// const newSth = sth.concat(...fruits);
// console.log(newSth);

// const fruits = [553, 344, 226];

// fruits.forEach(el => console.log(el * 5));

// const myFavoriteColor = ['black'];
// myFavoriteColor.unshift('yellow');
// myFavoriteColor.push('green');

// for (let i = 0; i < myFavoriteColor.length; i++) {
//     console.log(`Mój ulubiony color: ${myFavoriteColor[i].charAt(0).toUpperCase() + myFavoriteColor[i].slice(1)}`);

// };


const cars = 'mercedes, audi, bmw, mustang, nissan';

// const carsArr = cars.split(', ');


// console.log(carsArr.length > 3 ? 'Ok' : 'No, it s wrong.');

// if (carsArr.includes('audi')){
//     carsArr.push('lambo');
// }else{
//     carsArr.pop();
// };
// console.log(carsArr);

// for (let i = 0; i < carsArr.length; i++) {
//     console.log(carsArr[i].toUpperCase());

// }

//FUNKCJEEEE
//deklaracja funkcji
// function test() {
//     console.log('Czesc.');
// };
// test();

// //wyrażenie funkcyjne
// const newTest = function () {
//     console.log('siemka.')
// };
// newTest();

// function add(x, y) {
//     //console.log(x + y);
//     return x + y;
// };

// add(2, 3);


// function hello (name,age){
//     console.log(`Czesc, mam na imie ${name} i mam ${age} lat.`);
// };
// hello('Mikołaj',18);

// const h1 = document.querySelector('h1');

// h1.addEventListener('click',function (){
//     console.log('U clicked me.')
// })


// const test = function(name){
//     console.log(name);

// }

// test('Ania');

// const test2 = (name) => {console.log(name);};
// test2('Klaudia');

// const test3 = () => {
//     console.log('Siemka');
// };
// test3();

// const test4 = (age,name) => console.log(age);
// test4(321);

// function add (a,b){
//     return a + b; 
// }
// add(1,2)


// const add2 = (x,y) => x * y;

// const arr = ['Moday','Tuesday','Friday'];

// const arr2 = arr.forEach(function(x){
//     console.log(x);
// });

// const arr3 = arr.forEach(x=>console.log(x))


//Welcome

// const hello = (name = 'użytkowniku') => `Witaj ${name}, jak sie masz?`;
// console.log(hello('Adam'));

// const add = (x = 1, y = 0) => x + y;
// console.log(add(1, 3));

// const arr = ['green', 'red', 'blue'];
// console.log(...arr);

// function multiply(num) {
//     return num * 2;
// }

// function numbers(x, y, ...z) {
//     console.log(...z);
//     console.log(z.map(multiply))
// };

// numbers(30, 4, 3, 2, 5, 6, 7, 23);


// const $name = 'Ania';

// function show() {
//     const $name = 'Adam';
//     let age = 23;
//     console.log(`My name is - ${$name}.`)
//     console.log(age)


// function showTwo (){
//     console.log(`showTwo name = ${$name}.`);
//     age = 20;
//     console.log(`Age = ${age}`);

// }
// showTwo();

// function showThree (){
//     console.log(`showThree name = ${$name}.`);
//     age = 21;
//     console.log(`Age = ${age}`);

// }
// showThree();
// }
// show();

// const numbers = [2, 23, 'nothing'];
// const names = ['Adam', 'Monika', 'Artur', 'Dariusz'];

// const newNum = numbers.forEach (el =>  console.log(`${el} to powers equals: ${el ** 2}`)) ;


// const showBigNames = name => name.toUpperCase();
// const bigNames = names.map(showBigNames);
// console.log(`Lista imion w tablicy to: ${bigNames.join(', ')}`);

// Work with function

// let $score; 
// const add = (x,y) => {$score = x+y;

// if ($score % 2 === 0){
//     marina();
// }else{
//     nomarina();
// }
// }
// function marina(){
//     console.log(`Liczba ${$score} jest parzysta.`)
// }


// function nomarina(){
//     console.log(`Liczba ${$score} jest nieparzysta.`)
// }


// let $score;

// const add = (a,b) => { $score = a+b;

//     if($score % 2 === 0){
//         even();
//     }else{
//         odd();
//     }
// }

// function even() {
//     console.log(`Number ${$score} is even.`)
// };
// function odd() {
//     console.log(`Number ${$score} is odd.`)
// };
// add(2,4);

// let $celcius;
// let $temp;

// // function farenheit(x) {
// //     $celcius = x;
// //     $temp = x * 1.8 + 32;
// // }

// const fahrenheit = x => {
//     $celcius = x;
//     $temp = x * 1.8 + 32;
// };


// fahrenheit(34);
// console.log(`${$celcius} stopni celsjusza to ${$temp} stopni farenheita.`);

const num = 10;
let numbers = [];
for (let i = 0; i < num; i++) {
    numbers.push(i);

}

const one = number => {

    if (number % 3 === 0 && number !== 0) {
        console.log(`${number} is divisible for 3.`);
    } else {
        console.log(`${number} isn't divisible for 3.`);
    };
};


const newNumbers = numbers.forEach(one);

//This one more repeat












































































































































































































































































