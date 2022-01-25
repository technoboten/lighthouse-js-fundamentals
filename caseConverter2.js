const makeCamel = (input) => {
  let result = "";
  for(let i = 0; i < input.length; i++){
  if(input[i] === " "){
   i += 1;
   result += input[i].toUpperCase();
    } else {
    result += input[i];
    }
  }
  return result;
};

const makePascal = (input) => {
  let result = "";
  result += input[0].toUpperCase();
  for(let i = 1; i < input.length; i++){
  if(input[i] === " "){
   i += 1;
   result += input[i].toUpperCase();
    } else {
    result += input[i];
    }
  }
  return result;
};

const makeSnake = (input) => {
  let result = "";
  for(let i = 0; i < input.length; i++){
  if(input[i] === " "){
   result += "_";
    } else {
    result += input[i];
    }
  }
  return result;
};

const makeKebab = (input) => {
  let result = "";
  for(let i = 0; i < input.length; i++){
  if(input[i] === " "){
   result += "-";
    } else {
    result += input[i];
    }
  }
  return result;
};

// const makeTitle = (input) => {
//   let result = "";
//   for(let i = 0; i < input.length; i++){
//   if(input[i] === " "){
//    result += "-";
//     } else {
//     result += input[i];
//     }
//   }
//   return result;
// };

const makeVowel = (input) => {
  let result = "";
  let vowels = ["a", "e", "i", "o", "u"];
  for(let i = 0; i < input.length; i++){
    for(let v = 0; v < vowels.length; v++){
      if(input[i] === vowels[v]){
        result += input[i].toUpperCase();
        i = i + 1;
      } 
    }
    result += input[i];
  }
  return result;
};


const makeCase = (input, style) => {
  let output = "";
  switch (style) {
    case 'camel':
      output = makeCamel(input);
      break;
    case 'pascal':
      output = makePascal(input);
      break;
    case 'snake':
      output = makeSnake(input);
    case 'kebab':
      output = makeKebab(input);
      break;
    case 'title':
      // output = makeTitle(input);
    case 'vowel':
      output = makeVowel(input);
      break;
    case 'consonant':
      // output = makeConsonant(input);
    case 'upper':
      // output = makeUpper(input);
    case 'lower':
      // output = makeLower(input);
    break;
    default: 
      console.log(`invalid input`);
  }
  console.log(output);
  } 

  makeCase("this is a string", "kebab");