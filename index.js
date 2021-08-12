const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
]


function titleCased(param){
  //const newArray = tutorials.map(sentence => sentence.charAt(0).toUpperCase()+sentence.slice(1));
  const newArray = tutorials.map(sentence => {
    const spaces = sentence.split(" ");
    const newArray2 = spaces.map(word => word.charAt(0).toUpperCase()+word.slice(1));
    const newSentence = newArray2.join(" ");
    return newSentence;
    //return sentence.charAt(0).toUpperCase()+sentence.slice(1)
  });
  console.log(newArray);
  return newArray;
;
}

console.log(titleCased(tutorials));

// function titleCased{
//   const tutorial = tutorials.map(function(string){string.charAt(0).toUpperCase()+string.slice(1);});
// }

// function titleCased(x){
//   let w = x.charAt(0).toUpperCase()+x.slice(1);
//   return w;
// }


// console.log(test(y));