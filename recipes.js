let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];






const chooseRecipe = (a, b, r) => {
  let count = r.length;
//loop through recipes 
for(let recipeIndex = 0; recipeIndex < count; recipeIndex++){
  let recipe = r[recipeIndex];
  for(let ingredIndex = 0; ingredIndex < recipe['ingredients'].length; ingredIndex++){
    console.log(recipe['ingredients'][ingredIndex]);
    // if(r[i]['ingredients'][x] === a[i]){
    //   console.log('match!');
    // }
  }
  //check r.ingredients against bakery a
  //if a match is found 
      //set match to r.count?? 
      //reset count ??
      //check r.ingredients against bakery b
        //if a match is found, compare against matchA
        //if true, set recipe to matchA
          //if no match is found, return no match
  // if no match found, count --
  //check next recipe
}
}


  chooseRecipe(bakeryA, bakeryB, recipes);

//arr A loop -> when a match is found, add it to result and go to arrB
//if no match is found in arrA, skip to the next recipe
//if a match is found, check recipe against Arr B ** add name to result
//if no match is found, skip to the next recipe
// if a match is found, add it to result and return result

