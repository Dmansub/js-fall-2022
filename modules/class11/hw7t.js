
 /* q1 */
 function shortsent (abbrSentence) {
    let abbr = '';
    abbr = abbrSentence.toUpperCase().split(' ');
    var abbreviation = abbr[0].substring(0,1) + abbr[1].substring(0,1) + abbr[2].substring(0,1) + abbr[3].substring(0,1) + abbr[4].substring(0,1);
    return abbreviation
    }
   
    console.log(shortsent ( ' to be announce hi '))
   
   
/* q2 */
    
function reverseSent (revWords){
 
    let arrstr2 = revWords.split(' ')
    let reverseStr2 = ' '
    
    for (i = revWords.length - 1; i >= 0; i--) { 
        reverseStr2 = reverseStr2 += arrstr2[i] + " "
     }
      return reverseStr2
    }
    console.log(reverseSent(' hi goo bud'))


    /* q3 */


   function titlecaseword (capsLetter){
    //const sentence4 = 'you Never waLK ALONe';
    let sentence4_Titlecase = '';
    sentence4_Titlecase = capsLetter.toLowerCase().split(' ');
    var toUpperCase_0 = sentence4_Titlecase[0].slice(0,1).toUpperCase().concat(sentence4_Titlecase[0].slice(1));
    var toUpperCase_1 = sentence4_Titlecase[1].slice(0,1).toUpperCase().concat(sentence4_Titlecase[1].slice(1));
    var toUpperCase_2 = sentence4_Titlecase[2].slice(0,1).toUpperCase().concat(sentence4_Titlecase[2].slice(1));
    var toUpperCase_3 = sentence4_Titlecase[3].slice(0,1).toUpperCase().concat(sentence4_Titlecase[3].slice(1));
      return toUpperCase_0.concat(' ' + toUpperCase_1 ,' ' +  toUpperCase_2, ' ' + toUpperCase_3)
  }
  
   
   
  
  
  console.log(titlecaseword( 'LETS GET IT DONE'))