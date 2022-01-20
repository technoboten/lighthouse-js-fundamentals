const makeCase = (input, styles) => {
  let result = "";
  let style = "";
  let sortedStyles = [];

  if(Array.isArray(styles)){
    // styles.forEach(el => console.log(`style is ${el}`));
    for(let stylesIdx = 0; stylesIdx < styles.length; stylesIdx++){
    //loop through stylesArray
    console.log("styles loop");
      //compare styles[stylesIdx] to casess
      console.log(`style is: ${styles[stylesIdx]}`);
      let caseIdx = 0;
      let count = 0;
      while(caseIdx <= cases.length){
    //loop should run while ??
        if(styles[stylesIdx] === cases[caseIdx]){
          console.log(`case is: ${cases[caseIdx]}`);
          console.log(`add to sortedStyles Array`);
          sortedStyles.push(styles[stylesIdx]);
          caseIdx = cases.length+2;
        } else {
          console.log(`case is: ${cases[caseIdx]}`);
          console.log(`not a match, check the next case`);
        }
        caseIdx++ 
      } 

      console.log(sortedStyles);
    }  
  } else {
    style = styles;
      //result = applyStyle(input, style)
    }
  } 

  let cases = ["camel", "pascal", "snake", "kebab", "title", "vowel", "consonant", "upper", "lower"];


// const checkStyle = (style) => {
//   if(style === "camel" || "pascal" || "snake" || "kebab" || "title"){
//     console.log(`style is ${style}`);
//   } else if (style === "vowel" || "consonant"){
//     console.log(`style is ${style}`);
//   } else if (style === "upper" || "lower"){
//     console.log(`style is ${style}`);
//   }
// }

//check all el in styles 

makeCase("this is a string", ["pascal", "upper", "snake"]);