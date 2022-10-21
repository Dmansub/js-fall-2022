/* q1 homework 5 */

let numbers = [23, 12, 43, 10, 5, -10];
var sum = 0;
for (var number of numbers) {
    sum += number;
}
average = sum / numbers.length;
console.log(average.toFixed(2));


/* q2 */
 


let str2 = ('have a great good bad  not sure  day')
 
let arrstr2 = str2.split(' ')
let reverseStr2 = ''

for (i = arrstr2.length - 1; i >= 0; i--) { 
    reverseStr2 = reverseStr2 += arrstr2[i] + ' '
}
 
console.log(reverseStr2)

/* q3 */
let str3 = 'good morning  coding is great  '
let abbr = '';
for (let i = 0; i < str3.length - 1; i++){
    if (i == 0 && str3[i] != " "){
        abbr += str3[i];
    }else if (str3[i] == " " && str3[i + 1] != " "){
        abbr += str3[i + 1]
    }
}
console.log(`abbr -> ${abbr.toUpperCase()}`);
