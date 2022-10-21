/* conditonal code

*/
/*
isMilkPresent && normalMilkExpiry > 3

isAlmondMilkPresent  || isSoyaMilkPresent

else call home
if-block
*/

let num = 22;

if (num%2 === 0 ) { 
    console.log("EVEN");
}


console.log('\n\nif-else block\n\n');

let countryName = 'UniTED StateSCa';
let countryName_U = countryName.toUpperCase();
let countyFor_U = 'UniTED StateS oF AmeRICa'.toUpperCase();

if (countryName_U.localeCompare(countyFor_U) === 0 ) {
    console.log('you are a USA citzen');
} else {
    console.log('you are NOT a USA Citzen');
}


let age = 7
if (age >= 18) {
    console.log('you can vote');
} else {
    console.log('you cannot vote');
}



countryName = 'Japan';
countryName_U = countryName.toUpperCase();

if (countryName_U.localeCompare('United states of america'.toUpperCase()) === 0) {
    console.log('you are a USA Citizen');
} else if (countryName_U.localeCompare('Canada'.toUpperCase()) === 0) {
    console.log('you are a Canadian');
} else if (countryName_U.localeCompare('Abc'.toUpperCase()) === 0) {
    console.log('You are citizen of ABC');
} else if (countryName_U.length === 0) {
    console.log('Please enter your country name');
}

console.log("\nOut side if-else-if LINE\n");


let dayName = '' ; 

const sports = ['football', 'soccer','baseball','Rugby', 'Tennis'];

