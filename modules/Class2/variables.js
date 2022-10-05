let myage; 

console.log(myage);

/* create a varible in js

*/
let myAge;

console.log(myAge);   // undefined 
console.log(typeof myAge);   // undefined 

myAge = null;

console.log(myAge); // null
console.log(typeof myAge);   // object

myAge = 20;

console.log(myAge); // 20
console.log(typeof myAge);  // number 

myAge = "dorvan" ; 

console.log(myAge);
console.log(typeof myAge);

/*
let and var

*/

var myName = 'kaola';

var myName = 'lilli';
// /**
 
let userName = 'Dorvan Dman';
let userAge = 20;

console.log(userAge);

console.log(userName);

console.log('My name is Dorvan Dman, and Iam 20 years old.');

console.log('my name is '+userName+' , and I am '+userAge+' years old.');

console.log(`my name is ${userName}, and I am ${userAge} years old.`);

const mySsn = 1212; 



mySsn = 1111; 

let myTeamName = 'best team';
let  myTeamSize = 30;
myTeamSize++;
console.log(`I am part of ${myTeamName},we have total  ${myTeamSize} members.`);