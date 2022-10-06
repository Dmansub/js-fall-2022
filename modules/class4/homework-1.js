/*
f to c
*/
let fTemp1 = 70;
let cTemp1 = (fTemp1 - 32) / 1.8;
cTemp1 = cTemp1.toFixed(2);
console.log(`\n${fTemp1}°F is equals to ${cTemp1}°C`);

/*
f to k
*/
let fTemp2 = 40;
let kTemp2 = (fTemp2 + 459.67) * 5/9;
kTemp2 = kTemp2.toFixed(2);
console.log(`\n${fTemp2}°F is equals to ${kTemp2}°k`);

/* c to f
*/

let cTemp3 = 12;
let fTemp3 = (cTemp3 * 9/50)+ 32;
fTemp3 = fTemp3.toFixed(2);
console.log(`\n${cTemp3}°c is equals to ${fTemp3}°f`);

/* c to k
*/

let cTempa3 = 22;
let kTempa3 = (cTempa3 + 273.15)
kTempa3 = kTempa3.toFixed(2);
console.log(`\n${cTempa3}°c is equals to ${kTempa3}°k`);

/* k to f */

let kTema3 = 66;
let fTempa3 = (kTema3 * 9/5)- 459.67
fTempa3 = fTempa3.toFixed(2);
console.log(`\n${kTema3}°k is equals to ${fTempa3}°f`);

/* k to c */

let kTemp4 = 33;
let cTemp4 = (kTemp4 - 273.15)
cTemp4 = cTemp4.toFixed(2);
console.log(`\n${kTemp4}°k is equals to ${cTemp4}°c`);
