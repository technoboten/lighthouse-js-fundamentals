const makeCase = (input, styles) => {
  let result = "";
  let style = "";

  if(Array.isArray(styles)){
    // styles.forEach(el => console.log(`style is ${el}`));
    for(let stylesIdx = 0; stylesIdx < styles.length; stylesIdx++){
    //loop through stylesArray
    console.log("styles loop");
      //compare styles[stylesIdx] to casess
      let sortedStyles = [];
      console.log(`style is: ${styles[stylesIdx]}`);
      for(let caseIdx = 0; caseIdx < cases.length; caseIdx++){
      console.log("cases loop");
        if(styles[stylesIdx] === cases[caseIdx]){
          console.log(`case is: ${cases[caseIdx]}`);
          console.log(`add to sortedStyles Array`);
          sortedStyles.push(styles[stylesIdx]);
        } else {
          console.log(`case is: ${cases[caseIdx]}`);
          console.log(`not a match`);
        }
      }
      console.log(sortedStyles);
    }
  } else {
    style = styles;
      //result = applyStyle(input, style)
    }
  } 

  let cases = ["camel", "pascal", "snake", "kebab", "title"]


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