

function makeAbbr(words) {
    let abbrev = "";
    for (let i = 0; i < words.length - 1; i++) { // Loop through every character except the last one
      if (i == 0 && words[i] != " ") { // Add the first character
        abbrev += words[i];
      } else if (words[i] == " " && words[i + 1] != " ") { // If current character is space and next character isn't
        abbrev += words[i + 1];
      }
    }
    return abbrev.toLowerCase();
  }
  const words = 'a bc def';
  let result = makeAbbr(words);
  console.log(result)
  